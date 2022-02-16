const router = require("express").Router();

const {
    createNote
} = require("../../controllers/noteController");

router.route("/")
    .post(createNote)

module.exports = router;