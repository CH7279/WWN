const db = require("../models/index")
const PlacesDB = db.places; 
const {Op} = require('sequelize');

exports.createPlace=async(Place)=>{
    return await PlacesDB.create(Place)
}

exports.getAllPlaces=async()=>{
    return await PlacesDB.findAll()
}

exports.getplaceById=async(id)=>{
  return await PlacesDB.findByPk(id)
}

exports.updateplaceById=async(id, dataToUpdate)=>{
    return await PlacesDB.update(dataToUpdate, {
          where: { id: id }
        })
  }

exports.deleteplaceById=async(id)=>{
  return await PlacesDB.destroy({
    where: { id: id }
})
}
exports.getplaceByAddress=async(address)=>{
  return await PlacesDB.findAll({ 
    where: { address:{ [Op.substring]:address}} 
  })
}
exports.getplaceByName=async(name)=>{
  return await PlacesDB.findAll({
    where: { name:{ [Op.substring]: name }}
  })
}
exports.getplaceBySegula=async(segula)=>{
  return await PlacesDB.findAll({
    where: { segula:{ [Op.substring]: segula }}
  })
}