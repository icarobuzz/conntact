module.exports = (sequelize, DataTypes) =>{
  let Group = sequelize.define('Group', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,

  },{
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }, {
    classMethods: {
      associate: (models) => {
        Group.hasMany(models.ContactGroup, {
          foreignKey: 'group_id'
        });
        Group.hasOne(models.User, {
          foreignKey: 'user_id'
        });
      }
    }
  });
  return Group;
};
