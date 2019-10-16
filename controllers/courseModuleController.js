const boom = require('boom');
const CourseModule = require('../models/CourseModule');

// Get all CourseModules
exports.list = async (req, reply) => {
    try {
        const courseModules = await CourseModule.fetchAll();
        return courseModules.models;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.get = async (req, reply) => {
    try {
        const courseModule = await CourseModule.where('id', req.params.id).fetch();
        //const courseModule = await CourseModule.forge({id: req.params.id}).fetch();
        return courseModule;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.add = async (req, reply) => {
    try {
        const newCourseModule = await CourseModule.forge(req.body).save();

        return newCourseModule;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.update = async (req, reply) => {
    try {
        const courseModule = await CourseModule.where('id', req.params.id).fetch();
        if(courseModule) {
            courseModule.set(req.body)
            courseModule.save()
        }

        return courseModule;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.delete = async (req, reply) => {
    try {
        const info = await courseModule.where('id', req.params.id).destroy();
        return info;
    } catch (err) {
        throw boom.boomify(err);
    }
};
