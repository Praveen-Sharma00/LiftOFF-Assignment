const { default: loadMiddlewares } = require('./express');
const { default: loadDbConnection } = require('./mongoose');

export default function initExpressModules({ app }) {
  loadDbConnection();
  loadMiddlewares({ app });
  console.log('Express loaded...');
}
