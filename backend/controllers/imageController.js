import prisma from '../lib/prisma.js';
import * as fs from 'fs';
import path from 'path';
import probe from 'probe-image-size';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// READ - lire tous les images
export const getImages = async (req, res) => {
    const host = process.env.HOST;
    const images = await prisma.image.findMany();
    const formatedImages = await Promise.all(
        images.map(async function(image) {
            const metaData = await probe(host + "/" + image.path);

            return {
                ...image,
                ...metaData
            };
        })
    );

    const total = await prisma.image.count();
    res.set("X-Total-Count", total.toString());
    res.set("Access-Control-Expose-Headers", "X-Total-Count");
    res.json(formatedImages);
};

// READ ONE - lire un image par ID
export const getImageById = async (req, res) => {
    const image = await prisma.image.findUnique({
        where: { id: Number(req.params.id) },
    });
    res.json(image);
};

// CREATE - créer un image
export const createImage = async (req, res) => {
    const uploadsDir = path.join(__dirname, '../public/uploads');
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

    const imagePath = `uploads/${filename}`;
    const image = await prisma.image.create({
        data: {
            path: imagePath,
        },
    });

    res.json(image);
};

// UPDATE - modifier un image
export const updateImage = async (req, res) => {
    let imagePath = req.body.path;

    const oldImage = await prisma.image.findUnique({
        where: { id: Number(req.params.id) },
    });

    const uploadsDir = path.join(__dirname, '../public/uploads');
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

    if (oldImage && oldImage.path) {
        const oldFilePath = path.join(__dirname, '../public', oldImage.path);
        if (fs.existsSync(oldFilePath)) {
            fs.unlinkSync(oldFilePath);
        }
    }

    imagePath = `uploads/${filename}`;

    const image = await prisma.image.update({
        where: { id: Number(req.params.id) },
        data: {
            path: imagePath,
        },
    });
    res.json(image);
};

// DELETE - supprimer un image
export const deleteImage = async (req, res) => {
    const image = await prisma.image.findUnique({
        where: { id: Number(req.params.id) },
    });

    if (image && image.path) {
        const filepath = path.join(__dirname, `../public/${image.path}`);
        if (fs.existsSync(filepath)) {
            fs.unlinkSync(filepath);
        }
    }

    await prisma.image.delete({
        where: { id: Number(req.params.id) },
    });
    res.json({ message: "Image deleted" });
};
