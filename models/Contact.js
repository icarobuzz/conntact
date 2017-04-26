"use strict";
module.exports = (sequelize, DataTypes) => {
  let Contact = sequelize.define('Contact', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      telephone: DataTypes.STRING,
      gender: DataTypes.ENUM('M', 'F')
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }, {
    classMethods: {
      associate: (models) => {
        Contact.hasMany(models.ContactGroup, {
          foreignKey: 'contact_id'
        });
        Contact.hasOne(models.User, {
          foreignKey: 'user_id'
        });
      }
    }
  });
  return Contact;
}
