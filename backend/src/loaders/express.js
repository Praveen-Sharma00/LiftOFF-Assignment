import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import loadRoutes from '../api';

export default function loadMiddlewares({ app }) {
  app.use(cors());
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  loadRoutes({ app });

  app.use((err, req, res, next) => {
    if (err.isOperational) {
      return res.json({
        message: err.message,
        error: true,
        code: err.statusCode,
      });
    }
  });
}
