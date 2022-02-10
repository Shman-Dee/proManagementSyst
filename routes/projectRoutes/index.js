const router = require("express").Router();

const {
    createProject,
    getAllProjects,
    getProjectById
} = require("../../controllers/projectController");

router.route("/")
    .post(createProject)
    .get(getAllProjects);

router.route('/:projectId')
    .get(getProjectById)

module.exports = router;