const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('category_image', {
    caim_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    caim_path: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    caim_filename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    caim_cate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'category',
        key: 'cate_id'
      }
    }
  }, {
    sequelize,
    tableName: 'category_image',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "category_image_pkey",
        unique: true,
        fields: [
          { name: "caim_id" },
        ]
      },
    ]
  });
};
