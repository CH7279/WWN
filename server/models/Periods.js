const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{
    
    const Periods=sequelize.define('Periods',{
        id:{type:DataTypes.INTEGER,autoIncrement: true,primaryKey:true},
        start:DataTypes.DATE,
        end:DataTypes.DATE
    },
    {
        freezeTableNmae:true,
        timestamps: false
    }

    );
    return Periods;
}
