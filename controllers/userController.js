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
    }
};