import { resolve } from 'path';

import './database';

import express from 'express';
import cors from 'cors';
// import helmet from 'helmet';

import checkRoutes from './routes/checkRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

// const whiteList = [];

/* const corsOptions = {
  origin: function (origin, callback) {
    if(whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}; 
*/

const app = express();

app.use(cors());
// app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', checkRoutes);
app.use('/users/', userRoutes);
app.use('/tokens/', tokenRoutes);
app.use('/alunos/', alunoRoutes);
app.use('/fotos/', fotoRoutes);

export default app;
