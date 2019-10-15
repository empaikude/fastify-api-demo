const departmentController = require('../controllers/departmentController');
const departmentDoc = require('../documentation/departmentDoc');

const routes = [
  {
    method: 'GET',
    url: '/api/departments',
    handler: departmentController.list,
    schema: departmentDoc.list
  },
  {
    method: 'GET',
    url: '/api/departments/:id',
    handler: departmentController.get,
    schema: departmentDoc.get
  },
  {
    method: 'POST',
    url: '/api/departments',
    handler: departmentController.add,
    schema: departmentDoc.add
  },
  {
    method: 'PUT',
    url: '/api/departments/:id',
    handler: departmentController.update,
    schema: departmentDoc.update
  },
  {
    method: 'DELETE',
    url: '/api/departments/:id',
    handler: departmentController.delete,
    schema: departmentDoc.delete
  }
];

module.exports = routes;
