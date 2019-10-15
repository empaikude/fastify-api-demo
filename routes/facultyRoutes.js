const facultyController = require('../controllers/facultyController');
const facultyDoc = require('../documentation/facultyDoc');

const routes = [
  {
    method: 'GET',
    url: '/api/faculties',
    handler: facultyController.list,
    schema: facultyDoc.list
  },
  {
    method: 'GET',
    url: '/api/faculties/:id',
    handler: facultyController.get,
    schema: facultyDoc.get
  },
  {
    method: 'POST',
    url: '/api/faculties',
    handler: facultyController.add,
    schema: facultyDoc.add
  },
  {
    method: 'PUT',
    url: '/api/faculties/:id',
    handler: facultyController.update,
    schema: facultyDoc.update
  },
  {
    method: 'DELETE',
    url: '/api/faculties/:id',
    handler: facultyController.delete,
    schema: facultyDoc.delete
  }
];

module.exports = routes;
