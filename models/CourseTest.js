const bookshelf = require('../config/connection').bookshelf;

const CourseTest = bookshelf.Model.extend({
    tableName: 'course_test',
    hasTimestamps: true,

    course() {
        return this.belongsTo('Course')
    },

    course_questions() {
        return this.hasMany('CourseQuestion')
    }
});

module.exports = bookshelf.model('CourseTest', CourseTest);
