const bookshelf = require('../config/connection').bookshelf;

const Level = bookshelf.Model.extend({
    tableName: 'level'
});

module.exports = bookshelf.model('Level', Level);
