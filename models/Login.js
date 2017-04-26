  module.exports = (sequelize, DataTypes) => {
    const Login = sequelize.define('Login', {
      user: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING }
    }, {
      classMethods: {
        associate: (models) => {
          Login.belongsTo(models.User, {
            foreignKey: 'user_id'
          });
        }
      }
    });
    return Login;
  }
