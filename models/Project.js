const { Model, DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../config");

class Project extends Model {}

Project.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
    },
    projectName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4],
        },
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "project",
});

module.exports = Project;