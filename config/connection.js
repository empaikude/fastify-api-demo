//initialize environment variables
require('dotenv').config();

//create a database connection using knex.js library
//Destructure environment variables form process.env for DB connection
const { DB_NAME, DB_PASSWORD, DB_PORT, DB_HOST, DB_USER } = process.env;

const knex = require('knex')({
  client: 'pg',
  // connection: {
  //   host: DB_HOST,
  //   user: DB_USER,
  //   password: DB_PASSWORD,
  //   database: DB_NAME
  // },
  connection: `postgres://${DB_USER}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  searchPath: ['knex', 'public'],
  debug: true
});

exports.bookshelf = require('bookshelf')(knex)
