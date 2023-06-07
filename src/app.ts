import cors from 'cors';
import express from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';

const app = express();

// MiddleWares
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use('/api/v1/', routes);

// Error Handling
app.use(globalErrorHandler);

export default app;
