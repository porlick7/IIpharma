const env = process.env.NODE_ENV || 'development';   
if (env === 'test') return module.exports = require('./test.config');
else if (env === 'development') return module.exports = require('./development.config');

throw new Error('not known ENV')