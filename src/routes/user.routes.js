import { Router } from 'express';

import UserController from '../app/controllers/UserController';

const userRoutes = Router();

userRoutes.get('/index', UserController.index);
userRoutes.get('/show/:id', UserController.show);
userRoutes.post('/store', UserController.store);
userRoutes.put('/update/:id', UserController.update);
userRoutes.delete('/delete/:id', UserController.delete);

export default userRoutes;
