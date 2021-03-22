const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_shipping', {
    oship_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    oship_created_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    oship_ship_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    oship_arrival_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    oship_desc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    oship_order_name: {
      type: DataTypes.STRING(25),
      allowNull: true,
      references: {
        model: 'orders',
        key: 'order_name'
      }
    },
    oship_addr_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'address',
        key: 'addr_id'
      }
    },
    oship_stat_name: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'status',
        key: 'stat_name'
      }
    },
    oship_expe_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'expedition',
        key: 'expe_id'
      }
    }
  }, {
    sequelize,
    tableName: 'order_shipping',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "order_shipping_pkey",
        unique: true,
        fields: [
          { name: "oship_id" },
        ]
      },
    ]
  });
};
