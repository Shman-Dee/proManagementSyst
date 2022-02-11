const router = require("express").Router();
const projectRoutes = require("./projectRoutes");
const taskRoutes = require('./taskRoutes');
const userRoutes = require("./userRoutes");
const { homeView } = require("../controllers/homeController");
const { createProjectView } = require("../controllers/projectController");
const { loginView } = require('../controllers/userController')


router.get("/", homeView);
router.get('/login', loginView);

router.use("/projects", projectRoutes);
router.use("/users", userRoutes);
router.use("/createTask", taskRoutes);
router.use("/tasks", taskRoutes);
router.use("/createProject", createProjectView);

module.exports = router;