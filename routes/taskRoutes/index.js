const router = require('express').Router();
const { createTask, getAllTasks } = require('../../controllers/taskController');

router.route('/')
    .post(createTask)
    .get(getAllTasks)

module.exports = router;