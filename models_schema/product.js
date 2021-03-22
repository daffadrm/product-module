const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    prod_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prod_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    prod_desc: {
      type: DataTypes.STRING(3000),
      allowNull: false
    },
    prod_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prod_stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prod_expire: {
      type: DataTypes.DATE,
      allowNull: false
    },
    prod_cate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'category',
        key: 'cate_id'
      }
    },
    prod_brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'brand',
        key: 'brand_id'
      }
    },
    prod_acco_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'account',
        key: 'acco_id'
      }
    },
    prod_cond_name: {
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: 'conditions',
        key: 'cond_name'
      }
    },
    prod_weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_pkey",
        unique: true,
        fields: [
          { name: "prod_id" },
        ]
      },
    ]
  });
};
