const { Model, DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../config");

class Task extends Model {}

Task.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
    },
    taskName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4],
        },
    },
    projectId: {
        type: DataTypes.UUID,
        references: {
            model: "project",
            key: "id",
        },
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "project",
});

module.exports = Task;