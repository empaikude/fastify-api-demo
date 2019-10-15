const boom = require('boom');
const CourseQuestion = require('../models/CourseQuestion');

// Get all CourseQuestions
exports.list = async (req, reply) => {
    try {
        const courseQuestions = await CourseQuestion.fetchAll();
        return courseQuestions;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.get = async (req, reply) => {
    try {
        const courseQuestion = await CourseQuestion.where('id', req.params.id).fetch();
        //const courseQuestion = await CourseQuestion.forge({id: req.params.id}).fetch();
        return courseQuestion;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.add = async (req, reply) => {
    try {
        const newCourseQuestion = await CourseQuestion.forge(req.body).save();

        return newCourseQuestion;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.update = async (req, reply) => {
    try {
        const courseQuestion = await CourseQuestion.where('id', req.params.id).fetch();
        if(courseQuestion) {
            courseQuestion.set(req.body)
            courseQuestion.save()
        }

        return courseQuestion;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.delete = async (req, reply) => {
    try {
        const info = await courseQuestion.where('id', req.params.id).destroy();
        return info;
    } catch (err) {
        throw boom.boomify(err);
    }
};
