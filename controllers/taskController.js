const { Task } = require('../models');

module.exports = {
    createTask: async(req, res) => {
        const { taskName, projectId } = req.body;
        try {
            const task = await Task.create({
                taskName,
                projectId
            });
            res.json(task);
        } catch (error) {
            res.json(error);
        }
    },
    getAllTasks: async(req, res) => {
        try {
            const tasksData = await Task.findAll({});
            const task = tasksData.map(task => task.get({ plain: true }));
            res.json(task);
        } catch (error) {
            res.json(error);
        }
    },
    getTaskById: async(req, res) => {
        try {
            const taskData = await Task.findByPk(req.params.taskId);
            const task = taskData.get({ plain: true });
            res.render('singleTask', {
                task
            });

        } catch (error) {

        }
    }
};