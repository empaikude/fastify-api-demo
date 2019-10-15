const boom = require('boom');
const Course = require('../models/Course');

// Get all Courses
exports.list = async (req, reply) => {
    try {
        const courses = await Course.fetchAll();
        return courses;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.get = async (req, reply) => {
    try {
        const course = await Course.where('id', req.params.id).fetch();
        //const course = await Course.forge({id: req.params.id}).fetch();
        return course;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.add = async (req, reply) => {
    try {
        const newCourse = await Course.forge(req.body).save();

        return newCourse;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.update = async (req, reply) => {
    try {
        const course = await Course.where('id', req.params.id).fetch();
        if(course) {
            course.set(req.body)
            course.save()
        }

        return course;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.delete = async (req, reply) => {
    try {
        const info = await Course.where('id', req.params.id).destroy();
        return info;
    } catch (err) {
        throw boom.boomify(err);
    }
};
