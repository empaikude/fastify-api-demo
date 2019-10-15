const bookshelf = require('../config/connection').bookshelf;

const Level = bookshelf.Model.extend({
    tableName: 'level',
    hasTimestamps: true,

});

module.exports = bookshelf.model('Level', Level);
