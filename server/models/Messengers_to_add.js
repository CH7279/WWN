const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{
    
    const Messengers_to_add=sequelize.define('Messengers_to_add',{
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement: true},
        password:{type:DataTypes.STRING,allowNull:false},
        name:{type:DataTypes.STRING,allowNull:false},
        imgProfile:DataTypes.STRING,
        imgId:DataTypes.STRING,
        imgFace:DataTypes.STRING,
        email:DataTypes.STRING,
        phone:DataTypes.STRING,
        place:DataTypes.STRING
    },
    {
        freezeTableNmae:true,
        timestamps: false
    }

    );
    return Messengers_to_add;

}