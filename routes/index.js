const router = require("express").Router();
const projectRoutes = require("./projectRoutes");
const taskRoutes = require('./taskRoutes');
const userRoutes = require("./userRoutes");
const noteRoutes = require('./noteRoutes');
const { homeView } = require("../controllers/homeController");
const { createProjectView } = require("../controllers/projectController");
const { loginView, signUpView } = require('../controllers/userController');
const { createNote } = require("../controllers/noteController");


router.get("/", homeView);
router.get('/login', loginView);
router.get('/signup', signUpView);

router.use("/projects", projectRoutes);
router.use("/users", userRoutes);
router.use("/createTask", taskRoutes);
router.use("/tasks", taskRoutes);
router.use("/createProject", createProjectView);
router.use("/createNote", createNote);

module.exports = router;