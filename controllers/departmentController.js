const boom = require('boom');
const Department = require('../models/Department');

// Get all Departments
exports.list = async (req, reply) => {
    try {
        const departments = await Department.fetchAll();
        return departments.models;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.get = async (req, reply) => {
    try {
        const department = await Department.where('id', req.params.id).fetch();
        //const Department = await Department.forge({id: req.params.id}).fetch();
        return department;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.add = async (req, reply) => {
    try {
        const newDepartment = await Department.forge(req.body).save();

        return newDepartment;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.update = async (req, reply) => {
    try {
        const department = await Department.where('id', req.params.id).fetch();
        if(department) {
            department.set(req.body)
            department.save()
        }

        return department;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.delete = async (req, reply) => {
    try {
        const info = await Department.where('id', req.params.id).destroy();
        return info;
    } catch (err) {
        throw boom.boomify(err);
    }
};
