const courseQuestionController = require('../controllers/courseQuestionController');
const courseQuestionDoc = require('../documentation/courseQuestionDoc');

const routes = [
  {
    method: 'GET',
    url: '/api/coursequestions',
    handler: courseQuestionController.list,
    schema: courseQuestionDoc.list
  },
  {
    method: 'GET',
    url: '/api/coursequestions/:id',
    handler: courseQuestionController.get,
    schema: courseQuestionDoc.get
  },
  {
    method: 'POST',
    url: '/api/coursequestions',
    handler: courseQuestionController.add,
    schema: courseQuestionDoc.add
  },
  {
    method: 'PUT',
    url: '/api/coursequestions/:id',
    handler: courseQuestionController.update,
    schema: courseQuestionDoc.update
  },
  {
    method: 'DELETE',
    url: '/api/coursequestions/:id',
    handler: courseQuestionController.delete,
    schema: courseQuestionDoc.delete
  }
];

module.exports = routes;
