const categoryImg = (sequelize,DataTypes)=>{

    const categoryImg = sequelize.define('category_image', {
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
    categoryImg.associate = models => {
      categoryImg.belongsTo(models.category, { foreignKey: 'caim_cate_id' })
  
    }
    return categoryImg
  };

  export default categoryImg
