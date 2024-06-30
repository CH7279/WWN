const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{
    
    const Notes=sequelize.define('Notes',{
        id:{type:DataTypes.INTEGER,autoIncrement: true,primaryKey:true},
        name_to_prayer:DataTypes.STRING,
        request:DataTypes.STRING,
        nameUser:DataTypes.STRING,
        phonUser:DataTypes.INTEGER,
        emailUser:DataTypes.STRING
    },
    {
        freezeTableNmae:true,
        timestamps: false
    }

    );
    return Notes;

}
