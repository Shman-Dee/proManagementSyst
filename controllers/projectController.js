const { Project, Task } = require("../models");

module.exports = {
  createProject: async (req, res) => {
    if (!req.session.user) {
      res.redirect("/login");
    }
    const { projectName, userId } = req.body;
    try {
      const newProject = await Project.create({
        projectName,
        userId,
      });
      res.json(newProject);
    } catch (error) {
      res.json(error);
    }
  },
  getAllProjects: async (req, res) => {
    if (!req.session.user) {
      res.redirect("/login");
    }
    try {
      const projectsData = await Project.findAll();
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
    res.render("createProject");
  },
  getProjectById: async (req, res) => {
    try {
      const projectData = await Project.findOne({
        where: {
          id: req.params.projectId,
        },
        attributes: ["id", "projectName"],
        // include: [
        //   {
        //     model: Task,
        //     attributes: ["id", "taskName","createdAt"],
        //     order: ["createdAt", "DESC"],

        //   },
        // ],
      });
      const tasksData = await Task.findAll({
        where: {
          projectId: req.params.projectId,
        },
        order: [["createdAt", "DESC"]],
        
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
};
