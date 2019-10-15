const bookshelf = require('../config/connection').bookshelf;

const CourseLesson = bookshelf.Model.extend({
    tableName: 'course_lesson',
    hasTimestamps: true,

    course_module() {
        return this.belongsTo('CourseModule')
    },
    
    questions() {
        return this.hasMany('CourseQuestion')
    }
});

module.exports = bookshelf.model('CourseLesson', CourseLesson);
