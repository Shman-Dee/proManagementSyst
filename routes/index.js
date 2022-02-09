const router = require('express').Router();
const projectRoutes = require('./projectRoutes');
const userRoutes = require('./userRoutes');


router.use("/projects", projectRoutes);
router.use('/users', userRoutes);

module.exports = router;