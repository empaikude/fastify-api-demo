const bookshelf = require('../config/connection').bookshelf;

const CourseContent = bookshelf.Model.extend({
    tableName: 'course_content',
    hasTimestamps: true,

    course_lesson() {
        return this.belongsTo('CourseLesson')
    }
});

module.exports = bookshelf.model('CourseContent', CourseContent);
