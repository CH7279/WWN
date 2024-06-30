const db = require("../models/index")
const { Op } = require('sequelize');
const messengersDB = db.messengers;

login= async (email,password) => {
   data=await messengersDB.findOne({
    where: {
      [Op.and]: [{ email: email },{ password: password }]}
})
  return data;
}

createMessenger = (messenger) => {
  return messengersDB.create(messenger);
}

getAllMessengers = async () => {
  return await messengersDB.findAll()
}

getMessengerById = async (id) => {
  return await messengersDB.findByPk(id)
}

updateMessengerById = async (id, dataToUpdate) => {
   const x=await messengersDB.update(dataToUpdate, {
    where: { id: id }
  })
  console.log("kkkkkkkkkkkkkkkkk"+x);
  return x;
}

deleteMessengerById = async (id) => {
  return await messengersDB.destroy({
    where: { id: id }
  })
}
getMessengerByName = async (name_) => {
  return await messengersDB.findAll({
    where: { name: { [Op.substring]: name_ } }
  })
}
getMessengerByPlace = async (place) => {
  return await messengersDB.findAll({
    where: { places: { [Op.substring]: place } }
  })
}
getMessengerByPassword = async (password) => {
  return await messengersDB.findAll({
    where: { password: password }
  })
}
getMessengerByActivation = async (active) => {
    return await messengersDB.findAll({
      where: { is_active: active}
    })

}
getMessengerByEmail= async (email) => {

  const r=await messengersDB.findOne({
    where: { email: email }
  })
  // console.log(r)
   return r;
}
module.exports = {
  login,
  createMessenger,
  getAllMessengers,
  updateMessengerById,
  deleteMessengerById,
  getMessengerById,
  getMessengerByName,
  getMessengerByPlace,
  getMessengerByPassword,
  getMessengerByActivation,
  getMessengerByEmail
}