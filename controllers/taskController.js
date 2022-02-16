const { Task, Note } = require('../models');

module.exports = {
    createTask: async(req, res) => {
        console.log(req.body);
        const { taskName, taskDesc, projectId } = req.body;
        try {
            const task = await Task.create({
                taskName,
                taskDesc,
                projectId
            });
            res.json(task);
        } catch (error) {
            res.json(error);
        }
    },
    getTaskById: async(req, res) => {
        if (!req.session.user) {
            res.redirect("/login");
        }
        try {
            const taskData = await Task.findByPk(req.params.taskId);
            const task = taskData.get({ plain: true });
            // const notesData = await Note.findAll({
            //     where: {
            //         taskId: req.params.taskId,
            //     },
            //     order: [
            //         ["createdAt", "DESC"]
            //     ]
            // });
            // const notes = notesData.map(note => note.get({ plain: true }));
            res.render('singleTask', {
                task,
                //notes,
                loggedInUser: req.session.user || null,
            });

        } catch (error) {
            res.json(error);
        }
    },
    updateTask: async(req, res) => {
        if (!req.session.user) {
            res.redirect("/login");
        }
        try {
            const updateTask = Task.update({
                completed: req.body.completed,
            }, {
                where: {
                    id: req.params.taskId
                }
            });
            res.status(200).json(updateTask);
        } catch (error) {
            res.json(error);
        }
    }
};