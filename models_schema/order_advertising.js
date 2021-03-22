const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_advertising', {
    orad_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    orad_created_on: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    orad_publish_on: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    orad_finished_pn: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    orad_bill_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    orad_watr_numbers: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    orad_acco_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'account',
        key: 'acco_id'
      }
    },
    orad_stat_name: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'status',
        key: 'stat_name'
      }
    },
    orad_pack_name: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'package_type',
        key: 'pack_name'
      }
    }
  }, {
    sequelize,
    tableName: 'order_advertising',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "order_advertising_pkey",
        unique: true,
        fields: [
          { name: "orad_id" },
        ]
      },
    ]
  });
};
