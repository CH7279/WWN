const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{
    
    const Places_to_adds=sequelize.define('Places_to_adds',{
        id:{type:DataTypes.INTEGER,autoIncrement: true,primaryKey:true},
        name:{type:DataTypes.STRING,allowNull: false },
        address:{type:DataTypes.STRING,allowNull: false },
        description:DataTypes.STRING,
        image:DataTypes.STRING,
        segula:DataTypes.STRING,
        country:{type:DataTypes.STRING,allowNull: false }

    },
    {
        freezeTableNmae:true,
        timestamps: false
    }

    );
    return Places_to_adds;

}
