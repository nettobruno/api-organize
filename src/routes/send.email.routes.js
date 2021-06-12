import express from 'express';
import SendEmailController from '../app/controllers/SendEmailController';

const sendEmailRoutes = express.Router();

sendEmailRoutes.post('/store', SendEmailController.store);

export default sendEmailRoutes;
