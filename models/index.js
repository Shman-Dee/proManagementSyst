const User = require("./User");
const Task = require("./Task");
const Project = require("./Project");

Project.hasMany(User, {
  foreignKey: "projectId",
});

User.belongsTo(Project, {
  foreignKey: "projectId",
});

Project.hasMany(Task, {
  foreignKey: "projectId",
  onDelete: "CASCADE",
});

Task.belongsTo(Project, {
  foreignKey: "projectId",
});

User.hasMany(Task, {
  foreignKey: "userId",
});

Task.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = {
  User,
  Task,
  Project,
};
