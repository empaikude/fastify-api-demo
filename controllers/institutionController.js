const boom = require('boom');
const Institution = require('../models/Institution');

// Get all Institutions
exports.list = async (req, reply) => {
    try {
        const institutions = await Institution.fetchAll();
        return institutions.models;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.get = async (req, reply) => {
    try {
        const institution = await Institution.where('id', req.params.id).fetch();
        //const institution = await Institution.forge({id: req.params.id}).fetch();
        return institution;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.add = async (req, reply) => {
    try {
        const newInstitution = await Institution.forge(req.body).save();

        return newInstitution;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.update = async (req, reply) => {
    try {
        const institution = await Institution.where('id', req.params.id).fetch();
        if(institution) {
            institution.set(req.body)
            institution.save()
        }

        return institution;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.delete = async (req, reply) => {
    try {
        const info = await Institution.where('id', req.params.id).destroy();
        return info;
    } catch (err) {
        throw boom.boomify(err);
    }
};

