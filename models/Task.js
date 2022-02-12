const { Model, DataTypes, UUIDV4, TEXT } = require("sequelize");
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
    taskDesc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
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
    timestamps: true,
    freezeTableName: true,
    modelName: "task",
});

module.exports = Task;