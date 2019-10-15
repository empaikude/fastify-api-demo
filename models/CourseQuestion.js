const bookshelf = require('../config/connection').bookshelf;

const CourseQuestion = bookshelf.Model.extend({
    tableName: 'course_question',
    hasTimestamps: true,

    course_lesson() {
        return this.belongsTo('CourseLesson')
    },

    course_tests() {
        return this.belongsToMany('CourseTest')
    }
});

module.exports = bookshelf.model('CourseQuestion', CourseQuestion);
