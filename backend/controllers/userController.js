import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const safeSelect = { id: true, email: true, createdAt: true, updatedAt: true };

export const getUsers = async (req, res) => {
    const users = await prisma.user.findMany({ select: safeSelect });
    const total = await prisma.user.count();
    res.set("X-Total-Count", total.toString());
    res.json(users);
};

export const getUserById = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: { id: Number(req.params.id) },
        select: safeSelect,
    });
    res.json(user);
};

export const createUser = async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
        data: { email, password: hashedPassword },
        select: safeSelect,
    });
    res.json(user);
};

export const updateUser = async (req, res) => {
    const { email, password } = req.body;
    const data = {};
    if (email) data.email = email;
    if (password) data.password = await bcrypt.hash(password, 12);
    const user = await prisma.user.update({
        where: { id: Number(req.params.id) },
        data,
        select: safeSelect,
    });
    res.json(user);
};

export const deleteUser = async (req, res) => {
    await prisma.user.delete({ where: { id: Number(req.params.id) } });
    res.json({ message: "User deleted" });
};
