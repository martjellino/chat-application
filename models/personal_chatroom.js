'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personal_Chatroom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Personal_Messages, { foreignKey: 'personal_chatroom_id' })
    }
  }
  Personal_Chatroom.init({
    chatroom_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Personal_Chatroom',
    tableName: 'personal_chatrooms'
  });
  return Personal_Chatroom;
};