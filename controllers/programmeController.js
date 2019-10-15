const boom = require('boom');
const Programme = require('../models/Programme');

// Get all Programmes
exports.list = async (req, reply) => {
    try {
        const programmes = await Programme.fetchAll();
        return programmes;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.get = async (req, reply) => {
    try {
        const programme = await Programme.where('id', req.params.id).fetch();
        //const Programme = await Programme.forge({id: req.params.id}).fetch();
        return programme;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.add = async (req, reply) => {
    try {
        const newProgramme = await Programme.forge(req.body).save();

        return newProgramme;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.update = async (req, reply) => {
    try {
        const Programme = await Programme.where('id', req.params.id).fetch();
        if(Programme) {
            Programme.set(req.body)
            Programme.save()
        }

        return Programme;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.delete = async (req, reply) => {
    try {
        const info = await Programme.where('id', req.params.id).destroy();
        return info;
    } catch (err) {
        throw boom.boomify(err);
    }
};
