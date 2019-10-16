const boom = require('boom');
const Level = require('../models/Level');

// Get all Levels
exports.list = async (req, reply) => {
    try {
        const levels = await Level.fetchAll();
        return levels.models;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.get = async (req, reply) => {
    try {
        const level = await Level.where('id', req.params.id).fetch();
        //const level = await Level.forge({id: req.params.id}).fetch();
        return level;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.add = async (req, reply) => {
    try {
        const newLevel = await Level.forge(req.body).save();
        console.log(req.body)
        return newLevel;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.update = async (req, reply) => {
    try {
        const level = await Level.where('id', req.params.id).fetch();
        if(level) {
            level.set(req.body)
            level.save()
        }

        return Level;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.delete = async (req, reply) => {
    try {
        const info = await Level.where('id', req.params.id).destroy();
        return info;
    } catch (err) {
        throw boom.boomify(err);
    }
};

