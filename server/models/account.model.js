// import { sequelize } from ".";

const account = (sequelize,DataTypes)=>{ 
const account= sequelize.define('account', {
    acco_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'account',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "account_pkey",
        unique: true,
        fields: [
          { name: "acco_id" },
        ]
      },
    ]
  });
  account.associate = models => {
    account.hasMany(models.product, { foreignKey: 'prod_acco_id' })

  }
  return account
};
export default account