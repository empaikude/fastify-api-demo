const courseContentController = require('../controllers/courseContentController');
const courseContentDoc = require('../documentation/courseContentDoc');

const routes = [
  {
    method: 'GET',
    url: '/api/coursecontents',
    handler: courseContentController.list,
    schema: courseContentDoc.list
  },
  {
    method: 'GET',
    url: '/api/coursecontents/:id',
    handler: courseContentController.get,
    schema: courseContentDoc.get
  },
  {
    method: 'POST',
    url: '/api/coursecontents',
    handler: courseContentController.add,
    schema: courseContentDoc.add
  },
  {
    method: 'PUT',
    url: '/api/coursecontents/:id',
    handler: courseContentController.update,
    schema: courseContentDoc.update
  },
  {
    method: 'DELETE',
    url: '/api/coursecontents/:id',
    handler: courseContentController.delete,
    schema: courseContentDoc.delete
  }
];

module.exports = routes;
