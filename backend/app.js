import cors from "cors";
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    exposedHeaders: ["X-Total-Count"]
}));
app.use(express.json({limit: '10mb'}));
app.use(express.static('public'));

// Import controllers
import * as userController from './controllers/userController.js';
import * as projectController from './controllers/projectController.js';
import * as messageController from './controllers/messageController.js';
import * as appointmentController from './controllers/appointmentController.js';
import * as imageController from './controllers/imageController.js';
import * as serviceController from './controllers/serviceController.js';

// ====================================== USERS ROUTES ======================================
app.get('/users', userController.getUsers);
app.get('/users/:id', userController.getUserById);
app.post('/users', userController.createUser);
app.patch('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

// ====================================== PROJECTS ROUTES ======================================
app.get('/projects', projectController.getProjects);
app.get('/projects/slug/:slug', projectController.getProjectBySlug);
app.get('/projects/:id', projectController.getProjectById);
app.post('/projects', projectController.createProject);
app.patch('/projects/:id', projectController.updateProject);
app.delete('/projects/:id', projectController.deleteProject);

// ====================================== MESSAGES ROUTES ======================================
app.get('/messages', messageController.getMessages);
app.get('/messages/:id', messageController.getMessageById);
app.post('/messages', messageController.createMessage);
app.patch('/messages/:id', messageController.updateMessage);
app.delete('/messages/:id', messageController.deleteMessage);

// ====================================== APPOINTMENTS ROUTES ======================================
app.get('/appointments', appointmentController.getAppointments);
app.get('/appointments/:id', appointmentController.getAppointmentById);
app.post('/appointments', appointmentController.createAppointment);
app.patch('/appointments/:id', appointmentController.updateAppointment);
app.delete('/appointments/:id', appointmentController.deleteAppointment);

// ====================================== IMAGES ROUTES ======================================
app.get('/images', imageController.getImages);
app.get('/images/:id', imageController.getImageById);
app.post('/images', imageController.createImage);
app.patch('/images/:id', imageController.updateImage);
app.delete('/images/:id', imageController.deleteImage);

// ====================================== SERVICES ROUTES ======================================
app.get('/services', serviceController.getServices);
app.get('/services/:id', serviceController.getServiceById);
app.post('/services', serviceController.createService);
app.patch('/services/:id', serviceController.updateService);
app.delete('/services/:id', serviceController.deleteService);

app.listen(port, () => console.log(`Server listening on port ${port}`));
