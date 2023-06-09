import express from 'express';
const router = express.Router();

import authController from '../app/controllers/AuthController.js';

router.post('/login', authController.login);

export default router;
