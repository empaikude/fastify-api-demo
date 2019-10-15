const courseTestController = require('../controllers/courseTestController');
const courseTestDoc = require('../documentation/courseTestDoc');

const routes = [
  {
    method: 'GET',
    url: '/api/coursetests',
    handler: courseTestController.list,
    schema: courseTestDoc.list
  },
  {
    method: 'GET',
    url: '/api/coursetests/:id',
    handler: courseTestController.get,
    schema: courseTestDoc.get
  },
  {
    method: 'POST',
    url: '/api/coursetests',
    handler: courseTestController.add,
    schema: courseTestDoc.add
  },
  {
    method: 'PUT',
    url: '/api/coursetests/:id',
    handler: courseTestController.update,
    schema: courseTestDoc.update
  },
  {
    method: 'DELETE',
    url: '/api/coursetests/:id',
    handler: courseTestController.delete,
    schema: courseTestDoc.delete
  }
];

module.exports = routes;
