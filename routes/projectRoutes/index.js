const router = require("express").Router();

const {
    createProject,
    getAllProjects,
    getProjectById,
    deleteProject
} = require("../../controllers/projectController");

router.route("/")
    .post(createProject)
    .get(getAllProjects);

router.route('/:projectId')
    .get(getProjectById)
    .delete(deleteProject)

module.exports = router;