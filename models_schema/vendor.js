const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendor', {
    vendor_name: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    vendor_desc: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vendor',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "vendor_pkey",
        unique: true,
        fields: [
          { name: "vendor_name" },
        ]
      },
    ]
  });
};
