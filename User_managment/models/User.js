
'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    FullName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Phone: DataTypes.STRING,
  });
  return User;
};