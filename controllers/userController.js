const boom = require('boom');
const Users = require('../models/Users');

// Get all users
exports.list = async (req, reply) => {
  try {
    const users = await Users.fetchAll();
    return users;
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.get = async (req, reply) => {
  try {
    const user = await Users.where('id', req.params.id).fetch();
    //const user = await Users.forge({id: req.params.id}).fetch();
    return user;
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.add = async (req, reply) => {
  try {
    const newUser = await Users.forge(req.body).save();
    
    return newUser;
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.update = async (req, reply) => {
  try {
    const user = await Users.where('id', req.params.id).fetch();
    if(user) {
      user.set(req.body)
      user.save()
    }
    
    return user;
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.delete = async (req, reply) => {
  try {
    const info = await Users.where('id', req.params.id).destroy();
    return info;

  } catch (err) {
    throw boom.boomify(err);
  }
};
