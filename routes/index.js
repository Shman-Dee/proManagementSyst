const router = require("express").Router();
const projectRoutes = require("./projectRoutes");
const userRoutes = require("./userRoutes");
const { homeView } = require("../controllers/homeController");

router.get("/", homeView);

router.use("/projects", projectRoutes);
router.use("/users", userRoutes);

module.exports = router;
