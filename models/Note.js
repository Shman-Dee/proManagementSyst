const { Model, DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../config");

class Note extends Model {}

Note.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
    },
    note_text: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [20],
        },
    },
    // taskId: {
    //     type: DataTypes.UUID,
    //     references: {
    //         model: "task",
    //         key: "id",
    //     },
    // },
}, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "note",
});

module.exports = Note;