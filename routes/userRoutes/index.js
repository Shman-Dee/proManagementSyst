const router = require("express").Router();

const {
  createUser,
  getAllUsers,
  login,
  signUpView,
  logout
} = require("../../controllers/userController");

router.route("/")
    .post(createUser)
    .get(getAllUsers);

router.post("/login", login);

router.route("/signUp")
    .post(createUser)
    .get(signUpView);

router.post("/logout", logout)

module.exports = router;
