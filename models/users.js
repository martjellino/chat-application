'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Personal_Messages, { foreignKey: 'sender_id' }),
      this.hasMany(models.Personal_Messages, { foreignKey: 'receiver_id' }),
      this.hasMany(models.Group_Messages, { foreignKey: 'sender_id' }),
      this.hasMany(models.Group_Members, { foreignKey: 'users_id' })
    }
  }
  Users.init({
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    bio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};