const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wallet_transaction', {
    watr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    watr_numbers: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    watr_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    watr_debet: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    watr_credit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    watr_acc_target: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    watr_wale_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'wallet',
        key: 'wale_id'
      }
    },
    watr_paty_name: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'payment_type',
        key: 'paty_name'
      }
    }
  }, {
    sequelize,
    tableName: 'wallet_transaction',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "wallet_transaction_pkey",
        unique: true,
        fields: [
          { name: "watr_id" },
        ]
      },
      {
        name: "watr_pkey",
        unique: true,
        fields: [
          { name: "watr_id" },
        ]
      },
    ]
  });
};
