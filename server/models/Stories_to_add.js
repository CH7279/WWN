const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{
    
    const Stories_to_adds=sequelize.define('Stories_to_adds',{
        id:{type:DataTypes.INTEGER,primaryKey:true,allowNull:false,autoIncrement: true},
        title:{type:DataTypes.STRING,allowNull:false},
        story:{type:DataTypes.STRING,allowNull:false},
        place:DataTypes.STRING,
        nameUser:DataTypes.STRING,
        emailUser:DataTypes.STRING,
        phonUser:DataTypes.INTEGER,
        image:DataTypes.STRING
    },
    {
        freezeTableNmae:true,
        timestamps: false
    }

    );
    return Stories_to_adds;

}