const { User } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
    createUser: async(req, res) => {
        const { firstName, lastName, email, password } = req.body;
        try {
            const user = await User.create({
                firstName,
                lastName,
                email,
                password,
            });
            res.json(user);
        } catch (error) {
            res.json(error);
        }
    },
    getAllUsers: async(req, res)=>{
        try {
            const usersData = await User.findAll({});
            const users = usersData.map(user =>user.get({ plain: true}));
            res.json(users);
        } catch (error) {
            res.json(error);
        }

    },
    login: async (req, res) => {
        const { email, password } = req.body;
        if (!email || !password) {
           return res.redirect('/login');
        }
        try {
            const userData = await User.findOne({
                where: {
                    email: req.body.email
                }
            });
            const userFound = userData.get({ plain: true });
            if (!userFound) {
               return res.status(400).json({ error: 'No user with that email'});
            }
            const isMatchingPassword = await bcrypt.compare(password, userFound.password);
            if (!isMatchingPassword) {
                return res.status(401).json({ error: 'INvalid password'});
            }

            req.session.save(() => {
                req.session.loggedIN = true;
                req.session.user = userFound;
                req.session.user_id = userFound.id;
                res.json({ success: true});
            })
        } catch (error) {
            res.json(error);
        };
        
    },
    loginView: (req, res) => {
        if (req.session.loggedIn) {
            return res.redirect('/projects')
        }
        res.render('login');
    }
};