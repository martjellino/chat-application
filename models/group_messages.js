'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group_Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Users, { as: 'users', foreignKey: 'sender_id' }),
      this.belongsTo(models.Group_Chatroom, { as: 'group_chatroom', foreignKey: 'group_chatroom_id' })
    }
  }
  Group_Messages.init({
    sender_id: DataTypes.INTEGER,
    message: DataTypes.TEXT,
    group_chatroom_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Group_Messages',
  });
  return Group_Messages;
};