const router = require('express').Router();
const userRoutes = require('./userData-routes');
const projectRoutes = require('./projectData-routes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
