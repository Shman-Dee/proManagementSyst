const router = require('express').Router();
const { createTask, getAllTasks, getTaskById, updateTask } = require('../../controllers/taskController');

router.route('/')
    .post(createTask)
    // .get(getAllTasks)

router.route('/:taskId')
    .get(getTaskById)

router.put('/:taskId', updateTask)

module.exports = router;