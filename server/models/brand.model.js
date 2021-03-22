const brand =  (sequelize,DataTypes)=>{

    const brand =  sequelize.define('brand', {
        brand_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        brand_name: {
          type: DataTypes.STRING(55),
          allowNull: false
        }
      }, {
        sequelize,
        tableName: 'brand',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "brand_pkey",
            unique: true,
            fields: [
              { name: "brand_id" },
            ]
          },
        ]
      });
      brand.associate = models => {
        brand.hasMany(models.product, { foreignKey: 'prod_brand_id' })
    
    
      }
      return brand
    };
    
    export default brand