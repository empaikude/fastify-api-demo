const bookshelf = require('../config/connection').bookshelf;

const User = bookshelf.Model.extend({
    tableName: 'institution',
    hasTimestamps: true,

    departments() {
        return this.hasMany('Department')
    }
});

module.exports = bookshelf.model('User', User);
