'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personal_Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Users, { foreignKey: 'sender_id' }),
      this.belongsTo(models.Users, { foreignKey: 'receiver_id' }),
      this.belongsTo(models.Personal_Chatroom, { foreignKey: 'personal_chatroom_id' })
    }
  }
  Personal_Messages.init({
    sender_id: DataTypes.INTEGER,
    receiver_id: DataTypes.INTEGER,
    message: DataTypes.TEXT,
    personal_chatroom_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Personal_Messages',
    tableName: 'personal_messages'
  });
  return Personal_Messages;
};