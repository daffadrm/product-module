const status =(sequelize,DataTypes)=>{
const Status = sequelize.define('status', {
    stat_name: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    stat_desc: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    stat_module: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "status_stat_module_key"
    }
  }, {
    sequelize,
    tableName: 'status',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "status_pkey",
        unique: true,
        fields: [
          { name: "stat_name" },
        ]
      },
      {
        name: "status_stat_module_key",
        unique: true,
        fields: [
          { name: "stat_module" },
        ]
      },
    ]
  });
  return Status
}
export default status