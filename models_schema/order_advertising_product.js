const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_advertising_product', {
    orap_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    orap_total_click: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    orap_total_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    orap_current_click: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    orap_current_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    orap_stat_name: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    orap_orad_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'order_advertising',
        key: 'orad_id'
      }
    },
    orap_prod_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'product',
        key: 'prod_id'
      }
    }
  }, {
    sequelize,
    tableName: 'order_advertising_product',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "order_advertising_product_pkey",
        unique: true,
        fields: [
          { name: "orap_id" },
        ]
      },
    ]
  });
};
