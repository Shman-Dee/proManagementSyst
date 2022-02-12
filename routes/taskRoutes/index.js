const router = require('express').Router();
const { createTask, getAllTasks, getTaskById } = require('../../controllers/taskController');

router.route('/')
    .post(createTask)
    // .get(getAllTasks)

router.route('/:taskId')
    .get(getTaskById)

module.exports = router;