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
    getTaskById: async(req, res) => {
        try {
            if (!req.session.user) {
                res.redirect("/login");
            }
            const taskData = await Task.findByPk(req.params.taskId);
            const task = taskData.get({ plain: true });
            res.render('singleTask', {
                task,
                loggedInUser: req.session.user || null,
            });

        } catch (error) {

        }
    }
};