const db = require("../models/index")
const messengers_to_addDB = db.messengers_to_adds; 


createMessengers_to_add=(messenger)=>{
    return  messengers_to_addDB.create(messenger)
}

getAllMessengers_to_add=async()=>{
 console.log("lkjhgfds")
    return await messengers_to_addDB.findAll()
}

getMessengers_to_addById=async(id)=>{
  return await messengers_to_addDB.findByPk(id)
}

updateMessengers_to_addById=async(id, dataToUpdate)=>{
    return await messengers_to_addDB.update(dataToUpdate, {
          where: { id: id }
        })
  }

deleteMessengers_to_addById=async(id)=>{
  return await messengers_to_addDB.destroy({
    where: { id: id }
})
}
getmessengers_to_addByPassword=async(password)=>{
  return await messengers_to_addDB.findAll({
    where: { password: password }
})}

module.exports ={
  createMessengers_to_add,
  getAllMessengers_to_add,
  updateMessengers_to_addById,   
  deleteMessengers_to_addById,
  getMessengers_to_addById,
  getmessengers_to_addByPassword
}