const boom = require('boom');
const Users = require('../models/Users');

// Get all users
exports.listUsers = async (req, reply) => {
  try {
    const users = await Users.fetchAll();
    return users;
  } catch (err) {
    throw boom.boomify(err);
  }
};
