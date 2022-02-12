const { User } = require("../models");
const bcrypt = require("bcryptjs");

module.exports = {
  createUser: async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
      const user = await User.create({
        firstName,
        lastName,
        email,
        password,
      });

      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user = user;
        req.session.user_id = user.id;
        res.json({ success: true });
      });
    } catch (error) {
      res.json(error);
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const usersData = await User.findAll({});
      const users = usersData.map((user) => user.get({ plain: true }));
      res.json(users);
    } catch (error) {
      res.json(error);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(401)
        .json({ error: "You must provide a valid email and password" });
    }

    try {
      const userData = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (!userData) {
        return res.status(400).json({ error: "No user with that email" });
      }
      const userFound = userData.get({ plain: true });
      if (!userFound) {
        return res.status(400).json({ error: "No user with that email" });
      }
      console.log(userFound);
      const isMatchingPassword = await bcrypt.compare(
        password,
        userFound.password
      );
      if (!isMatchingPassword) {
        return res.status(401).json({ error: "Invalid password" });
      }
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user = userFound;
        req.session.user_id = userFound.id;
        res.json({ success: true });
      });
    } catch (error) {
      res.json(error);
    }
  },
  loginView: (req, res) => {
    if (req.session.loggedIn) {
      return res.redirect("/projects");
    }
    res.render("login");
  },
  signUpView: (req, res) => {
    if (req.session.loggedIn) {
      return res.redirect("/projects");
    }
    res.render("signUp");
  },
  logout: (req, res) => {
    req.session.destroy(() => {
      res.send({ status: true });
    });
  },
};
