const User = require("./User");
const Task = require("./Task");
const Project = require("./Project");


Project.hasMany(Task, {
    foreignKey: "projectId",
    onDelete: "CASCADE",
});

Task.belongsTo(Project, {
    foreignKey: "projectId",
});

// Task.hasMany(Note, {
//     foreignKey: 'notId',
//     onDelete: "CASCADE",
// });

// Note.belongsTo(Task, {
//     foreignKey: 'notId',
// });



module.exports = {
    User,
    Task,
    Project,
};