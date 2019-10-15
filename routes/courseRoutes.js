const courseController = require('../controllers/courseController');
const courseDoc = require('../documentation/courseDoc');

const routes = [
  {
    method: 'GET',
    url: '/api/courses',
    handler: courseController.list,
    schema: courseDoc.list
  },
  {
    method: 'GET',
    url: '/api/courses/:id',
    handler: courseController.get,
    schema: courseDoc.get
  },
  {
    method: 'POST',
    url: '/api/courses',
    handler: courseController.add,
    schema: courseDoc.add
  },
  {
    method: 'PUT',
    url: '/api/courses/:id',
    handler: courseController.update,
    schema: courseDoc.update
  },
  {
    method: 'DELETE',
    url: '/api/courses/:id',
    handler: courseController.delete,
    schema: courseDoc.delete
  }
];

module.exports = routes;
