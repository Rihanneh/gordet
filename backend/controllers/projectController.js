import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// READ - lire tous les projects
export const getProjects = async (req, res) => {
    const projects = await prisma.project.findMany({
        include: {
            images: {
                include: {
                    image: true,
                },
            },
        },
    });
    const total = await prisma.project.count();
    res.set("X-Total-Count", total.toString());
    res.set("Access-Control-Expose-Headers", "X-Total-Count");
    const formattedProjects = projects.map(project => ({
        ...project,
        imageIds: project.images?.map(relation => relation.imageId) ?? [],
        images: project.images?.map(relation => relation.image) ?? [],
    }));
    res.json(formattedProjects);
};

// READ ONE - lire un projet par ID
export const getProjectById = async (req, res) => {
    const project = await prisma.project.findUnique({
        where: { id: Number(req.params.id) },
        include: {
            images: {
                include: {
                    image: true,
                },
            },
        },
    });
    if (!project) {
        return res.status(404).json({ message: "Project not found" });
    }
    res.json({
        ...project,
        imageIds: project.images?.map(relation => relation.imageId) ?? [],
        images: project.images?.map(relation => relation.image) ?? [],
    });
};

// READ ONE - lire un projet par SLUG
export const getProjectBySlug = async (req, res) => {
    console.log(req.params.slug)
    const project = await prisma.project.findUnique({
        where: { slug: req.params.slug },
        include: {
            images: {
                include: {
                    image: true,
                },
            },
        },
    });
    if (!project) {
        return res.status(404).json({ message: "Project not found" });
    }
    res.json({
        ...project,
        imageIds: project.images?.map(relation => relation.imageId) ?? [],
        images: project.images?.map(relation => relation.image) ?? [],
    });
};

// CREATE - créer un projet
export const createProject = async (req, res) => {
    const { imageIds, ...projectData } = req.body;
    if (projectData.date) {
        projectData.date = new Date(projectData.date);
    }

    const project = await prisma.project.create({
        data: {
            ...projectData,
            images: imageIds?.length
                ? {
                    create: imageIds.map((imageId) => ({ imageId })),
                }
                : undefined,
        },
        include: {
            images: {
                include: {
                    image: true,
                },
            },
        },
    });
    res.json({
        ...project,
        imageIds: project.images?.map(relation => relation.imageId) ?? [],
        images: project.images?.map(relation => relation.image) ?? [],
    });
};

// UPDATE - modifier un projet
export const updateProject = async (req, res) => {
    const projectId = Number(req.params.id);
    const { imageIds, images, createdAt, updatedAt, ...projectData } = req.body;

    if (projectData.date) {
        projectData.date = new Date(projectData.date);
    }

    const updatedProject = await prisma.$transaction(async (tx) => {
        if (Object.keys(projectData).length > 0) {
            await tx.project.update({
                where: { id: projectId },
                data: projectData,
            });
        }

        if (Array.isArray(imageIds)) {
            await tx.projectImages.deleteMany({
                where: { projectId },
            });

            if (imageIds.length > 0) {
                await tx.projectImages.createMany({
                    data: imageIds.map((imageId) => ({ projectId, imageId })),
                });
            }
        }

        return tx.project.findUnique({
            where: { id: projectId },
            include: {
                images: {
                    include: {
                        image: true,
                    },
                },
            },
        });
    });

    if (!updatedProject) {
        return res.status(404).json({ message: "Project not found" });
    }

    res.json({
        ...updatedProject,
        imageIds: updatedProject.images?.map(relation => relation.imageId) ?? [],
        images: updatedProject.images?.map(relation => relation.image) ?? [],
    });
};

// DELETE - supprimer un projet
export const deleteProject = async (req, res) => {
    const projectId = Number(req.params.id);

    await prisma.$transaction(async (tx) => {
        await tx.projectImages.deleteMany({
            where: { projectId },
        });

        await tx.project.delete({
            where: { id: projectId },
        });
    });

    res.json({ message: "Project deleted" });
};
