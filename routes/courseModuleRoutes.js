const courseModuleController = require('../controllers/courseModuleController');
const courseModuleDoc = require('../documentation/courseModuleDoc');

const routes = [
  {
    method: 'GET',
    url: '/api/coursemodules',
    handler: courseModuleController.list,
    schema: courseModuleDoc.list
  },
  {
    method: 'GET',
    url: '/api/coursemodules/:id',
    handler: courseModuleController.get,
    schema: courseModuleDoc.get
  },
  {
    method: 'POST',
    url: '/api/coursemodules',
    handler: courseModuleController.add,
    schema: courseModuleDoc.add
  },
  {
    method: 'PUT',
    url: '/api/coursemodules/:id',
    handler: courseModuleController.update,
    schema: courseModuleDoc.update
  },
  {
    method: 'DELETE',
    url: '/api/coursemodules/:id',
    handler: courseModuleController.delete,
    schema: courseModuleDoc.delete
  }
];

module.exports = routes;
