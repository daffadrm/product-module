const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wallet', {
    wale_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    wale_created_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    wale_saldo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wale_pin_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wale_acco_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'account',
        key: 'acco_id'
      }
    }
  }, {
    sequelize,
    tableName: 'wallet',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "wallet_pkey",
        unique: true,
        fields: [
          { name: "wale_id" },
        ]
      },
    ]
  });
};
