const levelController = require('../controllers/levelController');
const levelDoc = require('../documentation/levelDoc');

const routes = [
  {
    method: 'GET',
    url: '/api/levels',
    handler: levelController.list,
    schema: levelDoc.list
  },
  {
    method: 'GET',
    url: '/api/levels/:id',
    handler: levelController.get,
    schema: levelDoc.get
  },
  {
    method: 'POST',
    url: '/api/levels',
    handler: levelController.add,
    schema: levelDoc.add
  },
  {
    method: 'PUT',
    url: '/api/levels/:id',
    handler: levelController.update,
    schema: levelDoc.update
  },
  {
    method: 'DELETE',
    url: '/api/levels/:id',
    handler: levelController.delete,
    schema: levelDoc.delete
  }
];

module.exports = routes;
