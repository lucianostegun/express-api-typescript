// Project created from https://blog.logrocket.com/express-typescript-node/
import express from 'express';
import indexRoutes from './routes/index';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

// Routes
app.use('/', indexRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
