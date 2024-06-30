const db = require("../models/index")
const places_to_addDB = db.Places_to_add; 

exports.createplace_to_add=async(note)=>{
    return await places_to_addDB.create(note)
}

exports.getAllplaces_to_add=async()=>{
    return await places_to_addDB.findAll()
}

exports.getplace_to_addById=async(id)=>{
  return await places_to_addDB.findByPk(id)
}

exports.deleteplace_to_addById=async(id)=>{
  return await places_to_addDB.destroy({
    where: { id: id }
})
}