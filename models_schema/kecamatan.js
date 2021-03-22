const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kecamatan', {
    kec_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kec_name: {
      type: DataTypes.STRING(55),
      allowNull: true,
      unique: "kecamatan_kec_name_key"
    },
    kec_city_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'city',
        key: 'city_id'
      }
    }
  }, {
    sequelize,
    tableName: 'kecamatan',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "kecamatan_kec_name_key",
        unique: true,
        fields: [
          { name: "kec_name" },
        ]
      },
      {
        name: "kecamatan_pkey",
        unique: true,
        fields: [
          { name: "kec_id" },
        ]
      },
    ]
  });
};
