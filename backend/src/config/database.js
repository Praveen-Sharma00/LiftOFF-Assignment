export default function getDbConfig() {
  let dbUrl = '';

  const dbConfig = {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  };

  for (let key of Object.keys(dbConfig)) {
    if (dbConfig[key] === 'undefined') {
      delete dbConfig[key];
    }
  }

  if (process.env.NODE_ENV === 'development') {
    dbUrl += `mongodb://`;
  } else if (process.env.NODE_ENV === 'production') {
    dbUrl += `mongodb+srv://`;
  }

  if (dbConfig['user'] && dbConfig['password']) {
    dbUrl += `${process.env.DB_USER}:${process.env.DB_PASSWORD}@`;
  }

  dbUrl += `${process.env.DB_HOST}`;

  if (dbConfig['port']) {
    dbUrl += `:${process.env.DB_PORT}`;
  }
  dbUrl += `/${process.env.DB_NAME}`;

  if (process.env.NODE_ENV === 'production') {
    dbUrl += `?retryWrites=true&w=majority`;
  }
  dbConfig['dbUrl'] = dbUrl;

  return dbConfig;
}
