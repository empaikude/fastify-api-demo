const bookshelf = require('../config/connection').bookshelf;

const CourseModule = bookshelf.Model.extend({
    tableName: 'course_module',
    hasTimestamps: true,

    course() {
        return this.belongsTo('Course')
    },
    
    lessons() {
        return this.hasMany('Lesson')
    }
});

module.exports = bookshelf.model('CourseModule', CourseModule);
