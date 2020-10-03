import { StatusCodes, ReasonPhrases } from 'http-status-codes';

import config from '../config';

import HelloRoutes from './modules/hello/helloRoutes';

export default function loadRoutes({ app }) {
  const apiPrefix = `${config.api.prefix}`;

  app.use(`/${apiPrefix}/hello`, HelloRoutes);

  app.use(`/${apiPrefix}*`, (req, res, next) => {
    let err = new Error();
    err.message = ReasonPhrases.NOT_FOUND;
    err.statusCode = StatusCodes.NOT_FOUND;
    err.isOperational = true
    next(err);
  });
}
