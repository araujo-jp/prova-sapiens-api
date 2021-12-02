import 'reflect-metadata';
import 'express-async-errors';
import 'dotenv/config';

import express from 'express';

const app = express();

app.use(express.json());

export { app };
