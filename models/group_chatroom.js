'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group_Chatroom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Group_Messages, { as: 'group_messages', foreignKey: 'group_chatroom_id' }),
      this.hasMany(models.Group_Members, { as: 'group_members', foreignKey: 'group_chatroom_id' })
      // define association here
    }
  }
  Group_Chatroom.init({
    group_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Group_Chatroom',
    tableName: 'group_chatroom'
  });
  return Group_Chatroom;
};