const db = require("../models/index")
const messengers_in_placesDB = db.messengers_in_places;

exports.createMessengers_In_Place = async (note) => {
  return await messengers_in_placesDB.create(note)
}

exports.getAllMessengers_In_Places = async () => {
  return await messengers_in_placesDB.findAll()
}

exports.get_Messengers_In_Places_ByIdRequest = async (id) => {
  return await messengers_in_placesDB.findOne( {where: { id_request: id }})
}
exports.getMessengers_In_PlaceById = async (id) => {
  return await messengers_in_placesDB.findByPk(id)
}

exports.deleteMessengers_In_PlaceById = async (id) => {
  return await messengers_in_placesDB.destroy({
    where: { id: id }
  })
}
exports.updateMessengers_In_PlaceById = async (id, dataToUpdate) => {
  return await messengers_in_placesDB.update(dataToUpdate, {
    where: { id: id }
  })
}

exports.getRequestsOfMessengers = (id) => {
  return  messengers_in_placesDB.findAll({
    include: [
     { model: db.requests}
    ]

  })
}

