const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('package_type', {
    pack_name: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    pack_desc: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    pack_duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'package_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "package_type_pkey",
        unique: true,
        fields: [
          { name: "pack_name" },
        ]
      },
    ]
  });
};
