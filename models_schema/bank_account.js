const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bank_account', {
    bacc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bacc_owner: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    bacc_acc_number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    bacc_saldo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bacc_acco_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'account',
        key: 'acco_id'
      }
    },
    bacc_bank_id: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'bank',
        key: 'bank_id'
      }
    }
  }, {
    sequelize,
    tableName: 'bank_account',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "bank_account_pkey",
        unique: true,
        fields: [
          { name: "bacc_id" },
        ]
      },
    ]
  });
};
