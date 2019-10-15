const boom = require('boom');
const CourseLesson = require('../models/CourseLesson');

// Get all CourseLessons
exports.list = async (req, reply) => {
    try {
        const courseLessons = await CourseLesson.fetchAll();
        return courseLessons;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.get = async (req, reply) => {
    try {
        const courseLesson = await CourseLesson.where('id', req.params.id).fetch();
        //const courseLesson = await CourseLesson.forge({id: req.params.id}).fetch();
        return courseLesson;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.add = async (req, reply) => {
    try {
        const newCourseLesson = await CourseLesson.forge(req.body).save();

        return newCourseLesson;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.update = async (req, reply) => {
    try {
        const courseLesson = await CourseLesson.where('id', req.params.id).fetch();
        if(courseLesson) {
            courseLesson.set(req.body)
            courseLesson.save()
        }

        return courseLesson;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.delete = async (req, reply) => {
    try {
        const info = await courseLesson.where('id', req.params.id).destroy();
        return info;
    } catch (err) {
        throw boom.boomify(err);
    }
};
