import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// READ - lire tous les messages
export const getMessages = async (req, res) => {
    const messages = await prisma.message.findMany();
    const total = await prisma.message.count();
    res.set("X-Total-Count", total.toString());
    res.set("Access-Control-Expose-Headers", "X-Total-Count");
    res.json(messages);
};

// READ ONE - lire un message par ID
export const getMessageById = async (req, res) => {
    const message = await prisma.message.findUnique({
        where: { id: Number(req.params.id) },
    });
    res.json(message);
};

// CREATE - créer un message
export const createMessage = async (req, res) => {
    const message = await prisma.message.create({
        data: req.body,
    });
    res.json(message);
};

// UPDATE - modifier un message
export const updateMessage = async (req, res) => {
    const message = await prisma.message.update({
        where: { id: Number(req.params.id) },
        data: req.body,
    });
    res.json(message);
};

// DELETE - supprimer un message
export const deleteMessage = async (req, res) => {
    await prisma.message.delete({
        where: { id: Number(req.params.id) },
    });
    res.json({ message: "message deleted" });
};
