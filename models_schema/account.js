const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account', {
    acco_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'account',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "account_pkey",
        unique: true,
        fields: [
          { name: "acco_id" },
        ]
      },
    ]
  });
};
