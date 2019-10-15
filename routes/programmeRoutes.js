const programmeController = require('../controllers/programmeController');
const programmeDoc = require('../documentation/programmeDoc');

const routes = [
  {
    method: 'GET',
    url: '/api/programmes',
    handler: programmeController.list,
    schema: programmeDoc.list
  },
  {
    method: 'GET',
    url: '/api/programmes/:id',
    handler: programmeController.get,
    schema: programmeDoc.get
  },
  {
    method: 'POST',
    url: '/api/programmes',
    handler: programmeController.add,
    schema: programmeDoc.add
  },
  {
    method: 'PUT',
    url: '/api/programmes/:id',
    handler: programmeController.update,
    schema: programmeDoc.update
  },
  {
    method: 'DELETE',
    url: '/api/programmes/:id',
    handler: programmeController.delete,
    schema: programmeDoc.delete
  }
];

module.exports = routes;
