import { Router } from 'express';

import userRoutes from './user.routes';
import itemRoutes from './item.routes';
import sessionRoutes from './session.routes';
import sendEmailRoutes from './send.email.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/items', itemRoutes);
routes.use('/sessions', sessionRoutes);
routes.use('/send-email', sendEmailRoutes);

export default routes;
