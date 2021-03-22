const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('city', {
    city_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    city_name: {
      type: DataTypes.STRING(55),
      allowNull: true,
      unique: "city_city_name_key"
    },
    city_prov_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'province',
        key: 'prov_id'
      }
    }
  }, {
    sequelize,
    tableName: 'city',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "city_city_name_key",
        unique: true,
        fields: [
          { name: "city_name" },
        ]
      },
      {
        name: "city_pkey",
        unique: true,
        fields: [
          { name: "city_id" },
        ]
      },
    ]
  });
};
