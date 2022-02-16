const { Project, Task } = require("../models");

module.exports = {
    createProject: async(req, res) => {
        if (!req.session.user) {
            res.redirect("/login");
        }
        const { projectName, projectDesc } = req.body;
        try {
            const newProject = await Project.create({
                projectName,
                projectDesc,
            });
            res.json(newProject);
        } catch (error) {
            console.log(error)
            res.json(error);
        }
    },
    getAllProjects: async(req, res) => {
        if (!req.session.user) {
            res.redirect("/login");
        }
        try {
            const projectsData = await Project.findAll({
                order: [
                    ["createdAt", "DESC"]
                ]
            });
            const projects = projectsData.map((project) =>
                project.get({ plain: true })
            );
            res.render("projects", {
                projects,
                loggedInUser: req.session.user || null,
            });
        } catch (e) {
            res.json(e);
        }
    },
    createProjectView: (req, res) => {
        if (!req.session.user) {
            res.redirect("/login");
        }
        res.render("createProject", {
            loggedInUser: req.session.user || null,
        });
    },
    getProjectById: async(req, res) => {
        if (!req.session.user) {
            res.redirect("/login");
        }
        try {
            const projectData = await Project.findOne({
                where: {
                    id: req.params.projectId,
                },
                attributes: ["id", "projectName", 'projectDesc'],
            });
            const tasksData = await Task.findAll({
                where: {
                    projectId: req.params.projectId,
                },
                order: [
                    ["createdAt", "DESC"]
                ],
            });
            const tasks = tasksData.map((task) => task.get({ plain: true }));

            const project = projectData.get({ plain: true });

            res.render("singleProject", {
                project,
                tasks,
                loggedInUser: req.session.user || null,
            });
        } catch (error) {
            res.json(error);
        }
    },
    deleteProject: async (req, res) => {
        try {
            await Task.destroy({
                where: {
                    projectId: req.params.projectId,
                }
            });
          const deletedProject = await Project.findByPk(req.params.projectId);
          await Project.destroy({
            where: {
                id: req.params.projectId,
            },
          });
          res.json(deletedProject);
        } catch (error) {
          res.json(error);
        }
      },
};