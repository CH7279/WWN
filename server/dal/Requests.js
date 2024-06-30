const db = require("../models/index")
const Messengers_in_placesDB = db.messengers_in_places;
const RequestsDB = db.requests;
const Op = db.Sequelize.Op;

exports.createRequest=async(Request)=>{
    return await RequestsDB.create(Request)
}

exports.getAllRequests=async()=>{
    return await RequestsDB.findAll()
}

exports.getRequestById=async(id)=>{
  return await RequestsDB.findByPk(id)
}

exports.getRequestBycacth=async()=>{
  return await RequestsDB.findAll({ 
    where: { is_catch: 0 },
      include:[
       {model: db.places},
       {model: db.periods}
      ],
       raw:true
    })
}
exports.getRequestByidUser=async(id)=>{
  return await RequestsDB.findAll({ where: { idUser: id }})
}


exports.updateRequestById=async(id, dataToUpdate)=>{
    return await RequestsDB.update(dataToUpdate, {
          where: { id: id }
        })
  }

exports.deleteRequestById=async(id)=>{
  return await RequestsDB.destroy({
    where: { id: id }
})
}

