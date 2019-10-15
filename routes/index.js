// Import our Controllers
const institutionRoutes = require('./institutionRoutes');
const facultyRoutes = require('./facultyRoutes');
const departmentRoutes = require('./departmentRoutes');
const programmeRoutes = require('./programmeRoutes');
const courseRoutes = require('./courseRoutes');
const courseModuleRoutes = require('./courseModuleRoutes');
const courseLessonRoutes = require('./courseLessonRoutes');
const courseContentRoutes = require('./courseContentRoutes');
const courseTestRoutes = require('./courseTestRoutes');
const courseQuestionRoutes = require('./courseQuestionRoutes');
const levelRoutes = require('./levelRoutes');

const routes = [
  ...institutionRoutes,
  ...facultyRoutes,
  ...departmentRoutes,
  ...programmeRoutes,
  ...courseRoutes,
  ...courseModuleRoutes,
  ...courseLessonRoutes,
  ...courseContentRoutes,
  ...courseTestRoutes,
  ...courseQuestionRoutes,
  ...levelRoutes
];

module.exports = routes;
