const router = require('express').Router();

const {
    createUser
} = require('../../controllers/userController');

router.route('/')
    .post(createUser)

module.exports = router;