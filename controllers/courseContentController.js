const boom = require('boom');
const CourseContent = require('../models/CourseContent');

// Get all CourseContents
exports.list = async (req, reply) => {
    try {
        const courseContents = await CourseContent.fetchAll();
        return courseContents.models;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.get = async (req, reply) => {
    try {
        const courseContent = await CourseContent.where('id', req.params.id).fetch();
        //const courseContent = await CourseContent.forge({id: req.params.id}).fetch();
        return courseContent;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.add = async (req, reply) => {
    try {
        const newCourseContent = await CourseContent.forge(req.body).save();

        return newCourseContent;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.update = async (req, reply) => {
    try {
        const courseContent = await CourseContent.where('id', req.params.id).fetch();
        if(courseContent) {
            courseContent.set(req.body)
            courseContent.save()
        }

        return courseContent;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.delete = async (req, reply) => {
    try {
        const info = await courseContent.where('id', req.params.id).destroy();
        return info;
    } catch (err) {
        throw boom.boomify(err);
    }
};
