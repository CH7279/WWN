const { sequelize,requests, messengers } = require(".");
const { DataTypes } = require("sequelize");

module.exports=(sequelize,DataTypes)=>{
    
    const Messengers_in_places=sequelize.define('Messengers_in_places',{
        id:{type:DataTypes.INTEGER,autoIncrement: true,primaryKey:true},
        id_messenger:{type:DataTypes.INTEGER,allowNull: false, allowNull: false },
        id_place:{type:DataTypes.INTEGER,allowNull: false },
        id_request:{type:DataTypes.INTEGER,allowNull: false,references:requests,referencesKey:'id' }
    },
    {
        freezeTableNmae:true,
        timestamps: false
    }

    );
    return Messengers_in_places;

}
