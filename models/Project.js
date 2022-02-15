const { Model, DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../config");

class Project extends Model {}

Project.init(
  {
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
    projectDesc: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [20],
      },
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "project",
  }
);

module.exports = Project;
