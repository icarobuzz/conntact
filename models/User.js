module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    telephone: DataTypes.STRING,
    gender: DataTypes.ENUM('M', 'F'),
    img: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }, {
    classMethods: {
      associate: (models) => {
        User.hasMany(models.Contact, {
          foreignKey: 'user_id'
        });
        User.hasMany(models.Groups, {
          foreignKey: 'user_id'
        });
        User.hasOne(models.Login, {
          foreignKey: 'user_id',
          allowNull: false
        });
      }
    }
  })
  return User;
}
