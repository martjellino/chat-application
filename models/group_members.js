'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group_Members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Group_Chatroom, { as: 'group_chatroom', foreignKey: 'group_chatroom_id' }),
      this.belongsTo(models.Users, { as: 'users', foreignKey: 'users_id' })
    }
  }
  Group_Members.init({
    group_chatroom_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Group_Members',
    tableName: 'group_members'
  });
  return Group_Members;
};