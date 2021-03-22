const condition =  (sequelize, DataTypes) => {
    const condition =  sequelize.define('conditions', {
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
    condition.associate = models => {
      condition.hasMany(models.product, { foreignKey: 'prod_cond_name' })
  
    }
    return condition
  };

  export default condition