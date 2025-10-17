import { PrismaClient } from '@prisma/client';
import cors from "cors";
import express from 'express';
import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.use(cors({
    origin: "http://localhost:5173",
    exposedHeaders: ["X-Total-Count"]
}));
app.use(express.json());


// ====================================== USERS ENTITY ======================================

// ✅ READ - lire tous les utilisateurs
app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany();
    const total = await prisma.user.count();
    res.set("X-Total-Count", total.toString());
    res.set("Access-Control-Expose-Headers", "X-Total-Count"); // si pas géré par cors()
    res.json(users);
});

// ✅ READ ONE - lire un utilisateur par ID
app.get('/users/:id', async (req, res) => {

    const user = await prisma.user.findUnique({
        where: { id: Number(req.params.id) }
    });
    res.json(user);
});

// ✅ CREATE - créer un utilisateur
app.post('/users', async (req, res) => {
    const user = await prisma.user.create({
        data: req.body,
    });
    res.json(user);
});

// ✅ UPDATE - modifier un utilisateur
app.patch('/users/:id', async (req, res) => {
    console.log(Number(req.params.id))
    const user = await prisma.user.update({
        where: { id: Number(req.params.id) },
        data: req.body,
    });
    res.json(user);
});

// ✅ DELETE - supprimer un utilisateur
app.delete('/users/:id', async (req, res) => {
    await prisma.user.delete({
        where: { id: Number(req.params.id) },
    });
    res.json({ message: "User deleted" });
});

// ====================================== PROJECTS ENTITY ======================================

// ✅ READ - lire tous les projects
app.get('/projects', async (req, res) => {
    const projects = await prisma.project.findMany();
    const total = await prisma.project.count();
    res.set("X-Total-Count", total.toString());
    res.set("Access-Control-Expose-Headers", "X-Total-Count"); // si pas géré par cors()
    res.json(projects);
});

// ✅ READ ONE - lire un projet par ID
app.get('/projects/:id', async (req, res) => {
    const project = await prisma.project.findUnique({
        where: { id: Number(req.params.id) },
    });
    res.json(project)
});

// ✅ CREATE - créer un projet
app.post('/projects', async (req, res) => {
    const date = new Date(req.body.date)
    req.body.date = date

    const project = await prisma.project.create({
        data: req.body,
    });
    res.json(project);
});

// ✅ UPDATE - modifier un projet
app.patch('/projects/:id', async (req, res) => {
    const project = await prisma.project.update({
        where: { id: Number(req.params.id) },
        data: req.body,
    });
    res.json(project);
});

// ✅ DELETE - supprimer un projet
app.delete('/projects/:id', async (req, res) => {
    await prisma.project.delete({
        where: { id: Number(req.params.id) },
    });
    res.json({ message: "Project deleted" });
});

// ====================================== MESSEGES ENTITY ======================================

// ✅ READ - lire tous les messages
app.get('/messages', async (req, res) => {
    const messages = await prisma.message.findMany();
    const total = await prisma.message.count();
    res.set("X-Total-Count", total.toString());
    res.set("Access-Control-Expose-Headers", "X-Total-Count"); // si pas géré par cors()
    res.json(messages);
});

// ✅ READ ONE - lire un message par ID
app.get('/messages/:id', async (req, res) => {
    const message = await prisma.message.findUnique({
        where: { id: Number(req.params.id) },
    });
    res.json(message)
});

// ✅ CREATE - créer un message
app.post('/messages', async (req, res) => {
    const message = await prisma.message.create({
        data: req.body,
    });
    res.json(message);
});

// ✅ UPDATE - modifier un message
app.patch('/messages/:id', async (req, res) => {
    const message = await prisma.message.update({
        where: { id: Number(req.params.id) },
        data: req.body,
    });
    res.json(message);
});

// ✅ DELETE - supprimer un message
app.delete('/messages/:id', async (req, res) => {
    await prisma.message.delete({
        where: { id: Number(req.params.id) },
    });
    res.json({ message: "message deleted" });
});

// ====================================== APPOINTMENTS ENTITY ======================================

// ✅ READ - lire tous les appointments
app.get('/appointments', async (req, res) => {
    const appointments = await prisma.appointment.findMany();
    const total = await prisma.appointment.count();
    res.set("X-Total-Count", total.toString());
    res.set("Access-Control-Expose-Headers", "X-Total-Count"); // si pas géré par cors()
    res.json(appointments);
});

// ✅ READ ONE - lire un appointment par ID
app.get('/appointments/:id', async (req, res) => {
    const appointment = await prisma.appointment.findUnique({
        where: { id: Number(req.params.id) },
    });
    res.json(appointment)
});

// ✅ CREATE - créer un appointment
app.post('/appointments', async (req, res) => {
    const appointment = await prisma.appointment.create({
        data: req.body,
    });
    res.json(appointment);
});

// ✅ UPDATE - modifier un appointment
app.patch('/appointments/:id', async (req, res) => {
    const appointment = await prisma.appointment.update({
        where: { id: Number(req.params.id) },
        data: req.body,
    });
    res.json(appointment);
});

// ✅ DELETE - supprimer un appointment
app.delete('/appointments/:id', async (req, res) => {
    await prisma.appointment.delete({
        where: { id: Number(req.params.id) },
    });
    res.json({ appointment: "appointment deleted" });
});

// ====================================== images ENTITY ======================================

// ✅ READ - lire tous les images
app.get('/images', async (req, res) => {
    const images = await prisma.image.findMany();
    const total = await prisma.image.count();
    res.set("X-Total-Count", total.toString());
    res.set("Access-Control-Expose-Headers", "X-Total-Count"); // si pas géré par cors()
    res.json(images);
});

// ✅ READ ONE - lire un image par ID
app.get('/images/:id', async (req, res) => {
    const image = await prisma.image.findUnique({
        where: { id: Number(req.params.id) },
    });
    res.json(image)
});

// ✅ CREATE - créer un image
app.post('/images', async (req, res) => {

    const uploadsDir = path.join(__dirname, 'public/uploads');
    if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const matches = req.body.imageContent.match(/^data:image\/([a-zA-Z]+);base64,(.+)$/);
    if (!matches) {
        return res.status(400).json({ error: 'Format base64 invalide' });
    }

    const base64Data = matches[2];
    const buffer = Buffer.from(base64Data, 'base64');
    const filename = req.body.path.title;
    const filepath = path.join(uploadsDir, filename);

    fs.writeFileSync(filepath, buffer);

    const imagePath = `public/uploads/${filename}`;

    const image = await prisma.image.create({
        data: {
            path: imagePath,
        },
    });

    console.log('save to db')
    res.json(image);
});

// ✅ UPDATE - modifier un image
app.patch('/images/:id', async (req, res) => {
    try {
        let imagePath = req.body.path;

        // Si une nouvelle image en base64 est fournie
        if (req.body.base64) {
            // Récupérer l'ancienne image pour la supprimer
            const oldImage = await prisma.image.findUnique({
                where: { id: Number(req.params.id) },
            });

            // Créer le dossier uploads s'il n'existe pas
            const uploadsDir = path.join(__dirname, 'uploads');
            if (!fs.existsSync(uploadsDir)) {
                fs.mkdirSync(uploadsDir, { recursive: true });
            }

            // Extraire le type d'image et les données base64
            const matches = req.body.base64.match(/^data:image\/([a-zA-Z]+);base64,(.+)$/);
            if (!matches) {
                return res.status(400).json({ error: 'Format base64 invalide' });
            }

            const imageType = matches[1];
            const base64Data = matches[2];
            const buffer = Buffer.from(base64Data, 'base64');

            // Générer un nom de fichier unique
            const filename = `${Date.now()}-${Math.random().toString(36).substring(7)}.${imageType}`;
            const filepath = path.join(uploadsDir, filename);

            // Sauvegarder le nouveau fichier
            fs.writeFileSync(filepath, buffer);

            // Supprimer l'ancien fichier si il existe
            if (oldImage && oldImage.path) {
                const oldFilePath = path.join(__dirname, oldImage.path);
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }

            // Stocker le nouveau chemin relatif
            imagePath = `uploads/${filename}`;
        }

        const image = await prisma.image.update({
            where: { id: Number(req.params.id) },
            data: {
                path: imagePath,
            },
        });
        res.json(image);
    } catch (error) {
        console.error('Erreur lors de la modification de l\'image:', error);
        res.status(500).json({ error: 'Erreur lors de la modification de l\'image' });
    }
});

// ✅ DELETE - supprimer un image
app.delete('/images/:id', async (req, res) => {
    try {
        // Récupérer l'image pour obtenir le chemin du fichier
        const image = await prisma.image.findUnique({
            where: { id: Number(req.params.id) },
        });

        // Supprimer le fichier physique si il existe
        if (image && image.path) {
            const filepath = path.join(__dirname, image.path);
            if (fs.existsSync(filepath)) {
                fs.unlinkSync(filepath);
            }
        }

        // Supprimer l'entrée en base de données
        await prisma.image.delete({
            where: { id: Number(req.params.id) },
        });
        res.json({ message: "Image deleted" });
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'image:', error);
        res.status(500).json({ error: 'Erreur lors de la suppression de l\'image' });
    }
});

// ====================================== services ENTITY ======================================

// ✅ READ - lire tous les services
app.get('/services', async (req, res) => {
    const services = await prisma.service.findMany();
    const total = await prisma.service.count();
    res.set("X-Total-Count", total.toString());
    res.set("Access-Control-Expose-Headers", "X-Total-Count"); // si pas géré par cors()
    res.json(services);
});

// ✅ READ ONE - lire un service par ID
app.get('/services/:id', async (req, res) => {
    const service = await prisma.service.findUnique({
        where: { id: Number(req.params.id) },
    });
    res.json(service)
});

// ✅ CREATE - créer un service
app.post('/services', async (req, res) => {
    const service = await prisma.service.create({
        data: req.body,
    });
    res.json(service);
});

// ✅ UPDATE - modifier un service
app.patch('/services/:id', async (req, res) => {
    const service = await prisma.service.update({
        where: { id: Number(req.params.id) },
        data: req.body,
    });
    res.json(service);
});

// ✅ DELETE - supprimer un service
app.delete('/services/:id', async (req, res) => {
    await prisma.service.delete({
        where: { id: Number(req.params.id) },
    });
    res.json({ service: "service deleted" });
});





app.listen(port, () => { console.log(`Example app listening on port ${port}`) })
