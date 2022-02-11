const router = require('express').Router();

const {
    createUser,
    getAllUsers,
    login
} = require('../../controllers/userController');

router.route('/')
    .post(createUser)
    .get(getAllUsers)

router.post('/login', login);

module.exports = router;