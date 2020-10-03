import express from 'express';
import initExpressModules from './loaders';

const app = express();

initExpressModules({ app });

export default app;
