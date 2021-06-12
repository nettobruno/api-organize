import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './routes';

import './services/mongodb';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

export default app;
