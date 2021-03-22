const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('conditions', {
    cond_name: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    cond_desc: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'conditions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "conditions_pkey",
        unique: true,
        fields: [
          { name: "cond_name" },
        ]
      },
    ]
  });
};
