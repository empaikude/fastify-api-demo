const boom = require('boom');
const Institution = require('../models/Institution');

// Get all Institutions
exports.list = async (req, reply) => {
    try {
        const institution = await Institution.fetchAll();
        return institution;
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
    const {code, name, address, email, phone, motto, website, twitter, facebook, youtube, description} = req.body
    
    try {
        const newInstitution = await Institution.forge({ 
            code, 
            name, 
            address, 
            email, 
            phone, 
            motto, 
            website, 
            twitter,
            facebook,
            youtube,
            description
        }).save();

        return newUser;
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

