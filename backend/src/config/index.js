import getDbConfig from './database';

export default {
  server: {
    port: process.env.PORT,
    host: process.env.HOST,
  },
  database: getDbConfig(),
  api: {
    prefix: `${process.env.API_STRING}/${process.env.API_VERSION}`,
  },
};
