import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { sendPasswordResetEmail } from '../utils/mailer.js';

const prisma = new PrismaClient();

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }
    const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
    res.json({ token, user: { id: user.id, email: user.email } });
};

export const forgotPassword = async (req, res) => {
    const { email } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });

    // Réponse identique que l'utilisateur existe ou non (sécurité)
    if (!user) {
        return res.json({ message: 'Si cet email existe, un lien a été envoyé.' });
    }

    const token = crypto.randomBytes(32).toString('hex');
    const expiry = new Date(Date.now() + 60 * 60 * 1000); // 1 heure

    await prisma.user.update({
        where: { email },
        data: { resetToken: token, resetTokenExpiry: expiry },
    });

    const resetUrl = `${process.env.FRONTEND_URL}/admin/reset-password?token=${token}`;
    await sendPasswordResetEmail(email, resetUrl);

    res.json({ message: 'Si cet email existe, un lien a été envoyé.' });
};

export const resetPassword = async (req, res) => {
    const { token, password } = req.body;

    const user = await prisma.user.findFirst({
        where: {
            resetToken: token,
            resetTokenExpiry: { gt: new Date() },
        },
    });

    if (!user) {
        return res.status(400).json({ message: 'Lien invalide ou expiré.' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await prisma.user.update({
        where: { id: user.id },
        data: {
            password: hashedPassword,
            resetToken: null,
            resetTokenExpiry: null,
        },
    });

    res.json({ message: 'Mot de passe mis à jour avec succès.' });
};
