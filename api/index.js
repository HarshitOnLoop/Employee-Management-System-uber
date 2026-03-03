const serverless = require('serverless-http');
const app = require('../backend/api');

module.exports = serverless(app);
