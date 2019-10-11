const boom = require('boom');
const Institution = require('../models/Institution');

// Get all users
exports.list = async (req, reply) => {
    try {
        const institutions = await Institution.fetchAll();
        return institutions;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.get = async (req, reply) => {
    try {
        const institution = await Institution.fetch();
        return institution;
    } catch (err) {
        throw boom.boomify(err);
    }
};
