const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_type', {
    paty_name: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    paty_desc: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payment_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "paymentType_pkey",
        unique: true,
        fields: [
          { name: "paty_name" },
        ]
      },
      {
        name: "payment_type_pkey",
        unique: true,
        fields: [
          { name: "paty_name" },
        ]
      },
    ]
  });
};
