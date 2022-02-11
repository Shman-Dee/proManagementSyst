const { User } = require('../models');

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

    }

};