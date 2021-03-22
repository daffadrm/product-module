const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expedition_route', {
    exro_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    exro_from: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    exro_to: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    exro_cost: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    exro_desc: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    exro_duration: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    exro_package: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    exro_expe_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'expedition',
        key: 'expe_id'
      }
    }
  }, {
    sequelize,
    tableName: 'expedition_route',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "expedition_route_pkey",
        unique: true,
        fields: [
          { name: "exro_id" },
        ]
      },
    ]
  });
};
