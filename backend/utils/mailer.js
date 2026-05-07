import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export const sendPasswordResetEmail = async (to, resetUrl) => {
    await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to,
        subject: 'Réinitialisation de votre mot de passe — Gordet',
        html: `
            <p>Bonjour,</p>
            <p>Vous avez demandé la réinitialisation de votre mot de passe.</p>
            <p>Cliquez sur le lien ci-dessous (valable 1 heure) :</p>
            <p><a href="${resetUrl}">${resetUrl}</a></p>
            <p>Si vous n'êtes pas à l'origine de cette demande, ignorez cet email.</p>
        `,
    });
};
