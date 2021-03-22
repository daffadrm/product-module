const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_variant', {
    prova_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prova_name: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    prova_option: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    prova_prod_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'prod_id'
      }
    }
  }, {
    sequelize,
    tableName: 'product_variant',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_variant_pkey",
        unique: true,
        fields: [
          { name: "prova_id" },
        ]
      },
    ]
  });
};
