const bookshelf = require('../config/connection').bookshelf;

const User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  hidden: ['password']
});

module.exports = bookshelf.model('User', User);
