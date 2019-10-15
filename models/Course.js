const bookshelf = require('../config/connection').bookshelf;

const Course = bookshelf.Model.extend({
    tableName: 'course',
    hasTimestamps: true,

    programmes() {
        return this.belongsToMany('Programme')
    },
    
    courses() {
        return this.hasMany('CourseModule')
    }
});

module.exports = bookshelf.model('Course', Course);
