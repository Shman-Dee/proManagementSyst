const { Model, DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../config");
const bcrypt = require('bcryptjs');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "user",
    hooks: {
			beforeCreate: async (user) => {
				const salt = await bcrypt.genSalt(10);
				const hashedPassword = await bcrypt.hash(user.password, salt);
				user.email = user.email.toLowerCase();
				user.password = hashedPassword;
				return user;
			},
			beforeUpdate: async (user) => {
				user.email = user.email.toLowerCase();
				return user;
			},
    }
  }
);

module.exports = User;
