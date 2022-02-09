const router = require("express").Router();
const projectRoutes = require("./projectRoutes");
const userRoutes = require("./userRoutes");
const { homeView } = require("../controllers/homeController");
const { createProjectView } = require("../controllers/projectController");

router.get("/", homeView);

router.use("/projects", projectRoutes);
router.use("/users", userRoutes);
router.use("/createProject", createProjectView);

module.exports = router;
