const { Project } = require('../models');

module.exports = {
    createProject: async(req, res) => {
        console.log(req.body);
        const { projectName, projectDesc, userId } = req.body;
        try {
            const newProject = await Project.create({
                projectName,
                projectDesc,
                userId,
            });
            res.json(newProject);
        } catch (error) {
            res.json(error);
        }
    }
};