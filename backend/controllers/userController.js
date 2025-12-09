import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// READ - lire tous les utilisateurs
export const getUsers = async (req, res) => {
    const users = await prisma.user.findMany();
    const total = await prisma.user.count();
    res.set("X-Total-Count", total.toString());
    res.set("Access-Control-Expose-Headers", "X-Total-Count");
    res.json(users);
};

// READ ONE - lire un utilisateur par ID
export const getUserById = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: { id: Number(req.params.id) }
    });
    res.json(user);
};

// CREATE - créer un utilisateur
export const createUser = async (req, res) => {
    const user = await prisma.user.create({
        data: req.body,
    });
    res.json(user);
};

// UPDATE - modifier un utilisateur
export const updateUser = async (req, res) => {
    const user = await prisma.user.update({
        where: { id: Number(req.params.id) },
        data: req.body,
    });
    res.json(user);
};

// DELETE - supprimer un utilisateur
export const deleteUser = async (req, res) => {
    await prisma.user.delete({
        where: { id: Number(req.params.id) },
    });
    res.json({ message: "User deleted" });
};
