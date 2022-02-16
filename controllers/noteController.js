const { Note } = require('../models');

module.exports = {
    createNote: async(req, res) => {
        const { note_text, taskId } = req.body;
        try {
            const newNote = await Note.create({
                note_text,
                taskId,
            });
            return res.json(newNote);
        } catch (error) {
            return res.json(error);
        }
    }
};