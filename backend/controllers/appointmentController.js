import prisma from '../lib/prisma.js';

// READ - lire tous les appointments
export const getAppointments = async (req, res) => {
    const appointments = await prisma.appointment.findMany();
    const total = await prisma.appointment.count();
    res.set("X-Total-Count", total.toString());
    res.set("Access-Control-Expose-Headers", "X-Total-Count");
    res.json(appointments);
};

// READ ONE - lire un appointment par ID
export const getAppointmentById = async (req, res) => {
    const appointment = await prisma.appointment.findUnique({
        where: { id: Number(req.params.id) },
    });
    res.json(appointment);
};

// CREATE - créer un appointment
export const createAppointment = async (req, res) => {
    const appointment = await prisma.appointment.create({
        data: req.body,
    });
    res.json(appointment);
};

// UPDATE - modifier un appointment
export const updateAppointment = async (req, res) => {
    const appointment = await prisma.appointment.update({
        where: { id: Number(req.params.id) },
        data: req.body,
    });
    res.json(appointment);
};

// DELETE - supprimer un appointment
export const deleteAppointment = async (req, res) => {
    await prisma.appointment.delete({
        where: { id: Number(req.params.id) },
    });
    res.json({ appointment: "appointment deleted" });
};
