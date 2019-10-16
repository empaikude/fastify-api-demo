const boom = require('boom');
const Faculty = require('../models/Faculty');

// Get all Faculties
exports.list = async (req, reply) => {
    try {
        const faculties = await Faculty.fetchAll();
        return faculties.models;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.get = async (req, reply) => {
    try {
        const faculty = await Faculty.where('id', req.params.id).fetch();
        //const Faculty = await Faculty.forge({id: req.params.id}).fetch();
        return faculty;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.add = async (req, reply) => {
    const {institution_id, code, name, description} = req.body
    
    try {
        const newFaculty = await Faculty.forge(req.body).save();

        return newFaculty;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.update = async (req, reply) => {
    try {
        const faculty = await Faculty.where('id', req.params.id).fetch();
        if(faculty) {
            faculty.set(req.body)
            faculty.save()
        }

        return faculty;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.delete = async (req, reply) => {
    try {
        const info = await Faculty.where('id', req.params.id).destroy();
        return info;
    } catch (err) {
        throw boom.boomify(err);
    }
};

