import mongoose from 'mongoose';

import config from './config';
import app from './app';

const port = parseInt(config.server.port, 10);
const host = config.server.host;

app.listen(port, host, () => {
  console.log(`Server listening on : ${config.server.host}:${config.server.port}`);
});
