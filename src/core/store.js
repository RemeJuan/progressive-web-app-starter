const { NODE_ENV } = process.env;

if (NODE_ENV === 'production' || NODE_ENV === 'test') {
  module.exports = require('./store/store.prod');
} else {
  module.exports = require('./store/store.dev');
}
