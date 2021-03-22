const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kodepos', {
    kodepos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kodepos_kec_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'kecamatan',
        key: 'kec_id'
      }
    }
  }, {
    sequelize,
    tableName: 'kodepos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "kodepos_pkey",
        unique: true,
        fields: [
          { name: "kodepos" },
        ]
      },
    ]
  });
};
