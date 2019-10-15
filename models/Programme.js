const bookshelf = require('../config/connection').bookshelf;

const Programme = bookshelf.Model.extend({
    tableName: 'programme',
    hasTimestamps: true,

    department() {
        return this.belongsTo('Department')
    },
    
    courses() {
        return this.hasMany('Course')
    }
});

module.exports = bookshelf.model('Programme', Programme);
