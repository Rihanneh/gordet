import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// READ - lire tous les services
export const getServices = async (req, res) => {
    const services = await prisma.service.findMany();
    const total = await prisma.service.count();
    res.set("X-Total-Count", total.toString());
    res.set("Access-Control-Expose-Headers", "X-Total-Count");
    res.json(services);
};

// READ ONE - lire un service par ID
export const getServiceById = async (req, res) => {
    const service = await prisma.service.findUnique({
        where: { id: Number(req.params.id) },
    });
    res.json(service);
};

// CREATE - créer un service
export const createService = async (req, res) => {
    const service = await prisma.service.create({
        data: req.body,
    });
    res.json(service);
};

// UPDATE - modifier un service
export const updateService = async (req, res) => {
    const service = await prisma.service.update({
        where: { id: Number(req.params.id) },
        data: req.body,
    });
    res.json(service);
};

// DELETE - supprimer un service
export const deleteService = async (req, res) => {
    await prisma.service.delete({
        where: { id: Number(req.params.id) },
    });
    res.json({ service: "service deleted" });
};
