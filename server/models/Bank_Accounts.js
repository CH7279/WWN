const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{
    
    const Bank_Accounts=sequelize.define('Bank_Accounts',{
        id:{type:DataTypes.INTEGER,autoIncrement: true,primaryKey:true},
        name:{type:DataTypes.STRING,allowNull: false },
        count_id:{type:DataTypes.INTEGER,allowNull: false },
        branch:{type:DataTypes.INTEGER,allowNull: false }
    },
    {
        freezeTableNmae:true,
        timestamps: false
    }

    );
    return Bank_Accounts;

}
