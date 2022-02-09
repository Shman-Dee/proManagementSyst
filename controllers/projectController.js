const { Project } = require("../models");

module.exports = {
  createProject: async (req, res) => {
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
    try {
      const projectsData = await Project.findAll();
      const projects = projectsData.map(project => project.get({plain: true}));
      res.render('projects', {projects})
    } catch (e) {
      res.json(e);
    }
  },
  createProjectView: (req, res) => {
    res.render('createProject')
  }
};
