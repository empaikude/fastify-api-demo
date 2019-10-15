const institutionController = require('../controllers/institutionController');
const institutionDoc = require('../documentation/institutionDoc');

const routes = [
  {
    method: 'GET',
    url: '/api/institutions',
    handler: institutionController.list,
    schema: institutionDoc.list
  },
  {
    method: 'GET',
    url: '/api/institutions/:id',
    handler: institutionController.get,
    schema: institutionDoc.get
  },
  {
    method: 'POST',
    url: '/api/institutions',
    handler: institutionController.add,
    schema: institutionDoc.add
  },
  {
    method: 'PUT',
    url: '/api/institutions/:id',
    handler: institutionController.update,
    schema: institutionDoc.update
  },
  {
    method: 'DELETE',
    url: '/api/institutions/:id',
    handler: institutionController.delete,
    schema: institutionDoc.delete
  }
];

module.exports = routes;
