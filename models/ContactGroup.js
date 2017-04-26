"use strict";
module.exports = (sequelize, DataTypes) => {
  let ContactGroup = sequelize.define('ContactGroup',{

  }, {
    classMethods: {
      associate: (models) => {
        ContactGroup.belongsTo(models.Contact, {
          foreignKey: 'contact_id'
        });
        ContactGroup.belongsTo(models.Group, {
          foreignKey: 'group_id'
        });
      }
    }
  })
  return ContactGroup;
}
