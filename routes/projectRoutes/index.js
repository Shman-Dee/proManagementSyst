const router = require('express').Router();

const {
    createProject
} = require('../../controllers/projectController');

router.route('/')
    .post(createProject)

module.exports = router;