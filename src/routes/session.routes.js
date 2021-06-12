import { Router } from 'express';
import SessionController from '../app/controllers/SessionController';

const sessionRoutes = Router();

sessionRoutes.post('/store', SessionController.store);

export default sessionRoutes;
