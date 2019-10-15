const bookshelf = require('../config/connection').bookshelf;

const Department = bookshelf.Model.extend({
    tableName: 'department',
    hasTimestamps: true,

    faculty() {
        return this.belongsTo('Faculty')
    },
    
    programmes() {
        return this.hasMany('Programme')
    }
});

module.exports = bookshelf.model('Department', Department);
