const router = require("express").Router();

const {
  createProject,
  getAllProjects,
} = require("../../controllers/projectController");

router.route("/")
    .post(createProject)
    .get(getAllProjects);
    
module.exports = router;
