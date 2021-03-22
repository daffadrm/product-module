const category = (sequelize, DataTypes) => {

  const category = sequelize.define('category', {
    cate_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cate_name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    cate_cate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'category',
        key: 'cate_id'
      }
    }
  }, {
    sequelize,
    tableName: 'category',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "category_pkey",
        unique: true,
        fields: [
          { name: "cate_id" },
        ]
      },
    ]
  });
  category.associate = models => {
    category.hasMany(models.category, { foreignKey: 'cate_cate_id' }),
    category.belongsTo(models.category, { foreignKey: 'cate_cate_id' }),

    category.hasMany(models.product, { foreignKey: 'prod_cate_id' }),
      // i dont understand this ?
    category.hasOne(models.categoryImg, { foreignKey: 'caim_cate_id' })


  }
  return category
};





export default category
