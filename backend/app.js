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
import * as authController from './controllers/authController.js';
import * as userController from './controllers/userController.js';
import * as projectController from './controllers/projectController.js';
import * as messageController from './controllers/messageController.js';
import * as appointmentController from './controllers/appointmentController.js';
import * as imageController from './controllers/imageController.js';
import * as serviceController from './controllers/serviceController.js';
import { requireAuth } from './middleware/auth.js';

// ====================================== AUTH ROUTES ======================================
app.post('/auth/login', authController.login);
app.post('/auth/forgot-password', authController.forgotPassword);
app.post('/auth/reset-password', authController.resetPassword);

// ====================================== USERS ROUTES (protected) ======================================
app.get('/users', requireAuth, userController.getUsers);
app.get('/users/:id', requireAuth, userController.getUserById);
app.post('/users', requireAuth, userController.createUser);
app.patch('/users/:id', requireAuth, userController.updateUser);
app.delete('/users/:id', requireAuth, userController.deleteUser);

// ====================================== PROJECTS ROUTES ======================================
// Public: GET (used by frontend)
app.get('/projects', projectController.getProjects);
app.get('/projects/slug/:slug', projectController.getProjectBySlug);
app.get('/projects/:id', projectController.getProjectById);
// Protected: mutations
app.post('/projects', requireAuth, projectController.createProject);
app.patch('/projects/:id', requireAuth, projectController.updateProject);
app.delete('/projects/:id', requireAuth, projectController.deleteProject);

// ====================================== MESSAGES ROUTES ======================================
// Public: POST (contact form)
app.post('/messages', messageController.createMessage);
// Protected: all others
app.get('/messages', requireAuth, messageController.getMessages);
app.get('/messages/:id', requireAuth, messageController.getMessageById);
app.patch('/messages/:id', requireAuth, messageController.updateMessage);
app.delete('/messages/:id', requireAuth, messageController.deleteMessage);

// ====================================== APPOINTMENTS ROUTES ======================================
// Public: POST (appointment booking form)
app.post('/appointments', appointmentController.createAppointment);
// Protected: all others
app.get('/appointments', requireAuth, appointmentController.getAppointments);
app.get('/appointments/:id', requireAuth, appointmentController.getAppointmentById);
app.patch('/appointments/:id', requireAuth, appointmentController.updateAppointment);
app.delete('/appointments/:id', requireAuth, appointmentController.deleteAppointment);

// ====================================== IMAGES ROUTES ======================================
// Public: GET (used by frontend gallery)
app.get('/images', imageController.getImages);
app.get('/images/:id', imageController.getImageById);
// Protected: mutations
app.post('/images', requireAuth, imageController.createImage);
app.patch('/images/:id', requireAuth, imageController.updateImage);
app.delete('/images/:id', requireAuth, imageController.deleteImage);

// ====================================== SERVICES ROUTES ======================================
// Public: GET (used by frontend)
app.get('/services', serviceController.getServices);
app.get('/services/:id', serviceController.getServiceById);
// Protected: mutations
app.post('/services', requireAuth, serviceController.createService);
app.patch('/services/:id', requireAuth, serviceController.updateService);
app.delete('/services/:id', requireAuth, serviceController.deleteService);

app.listen(port, () => console.log(`Server listening on port ${port}`));
