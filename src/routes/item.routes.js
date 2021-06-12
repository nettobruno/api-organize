import { Router } from 'express';

import isAuth from '../app/middlewares/isAuth';
import ItemController from '../app/controllers/ItemController';

const itemRoutes = Router();

itemRoutes.get('/index/:id', ItemController.index);
itemRoutes.get('/show/:id', ItemController.show);
itemRoutes.get('/showAll', ItemController.showAll);
itemRoutes.post('/store/:id', ItemController.store);
itemRoutes.put('/update/:id', ItemController.update);
itemRoutes.delete('/delete/:id', ItemController.delete);

export default itemRoutes;
