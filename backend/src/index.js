require = require('esm')(module);

require('dotenv').config({
  path: `${__dirname}/config/env/${process.env.NODE_ENV}.env`,
});

module.exports = require('./server');
