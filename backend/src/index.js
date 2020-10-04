require = require('esm')(module);

global.appRoot = `${__dirname}`;

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: `${__dirname}/config/env/development.env`,
  });
}

module.exports = require('./server');
