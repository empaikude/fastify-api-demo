const bookshelf = require('../config/connection').bookshelf;

const Institution = bookshelf.Model.extend({
    tableName: 'institution',
    hasTimestamps: true,

    faculties() {
        return this.hasMany('Faculty')
    }
});

module.exports = bookshelf.model('Institution', Institution);
