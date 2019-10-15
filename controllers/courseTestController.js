const boom = require('boom');
const CourseTest = require('../models/CourseTest');

// Get all CourseTests
exports.list = async (req, reply) => {
    try {
        const courseTests = await CourseTest.fetchAll();
        return courseTests;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.get = async (req, reply) => {
    try {
        const courseTest = await CourseTest.where('id', req.params.id).fetch();
        //const courseTest = await CourseTest.forge({id: req.params.id}).fetch();
        return courseTest;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.add = async (req, reply) => {
    try {
        const newCourseTest = await CourseTest.forge(req.body).save();

        return newCourseTest;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.update = async (req, reply) => {
    try {
        const courseTest = await CourseTest.where('id', req.params.id).fetch();
        if(courseTest) {
            courseTest.set(req.body)
            courseTest.save()
        }

        return courseTest;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.delete = async (req, reply) => {
    try {
        const info = await courseTest.where('id', req.params.id).destroy();
        return info;
    } catch (err) {
        throw boom.boomify(err);
    }
};
