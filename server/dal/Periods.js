const db = require("../models/index")
const periodsDB = db.periods; 

exports.createPeriod=async(period)=>{
    return await periodsDB.create(period)
}

exports.getPeriodById=async(id)=>{
  return await periodsDB.findByPk(id)
}

exports.deletePeriodById=async(id)=>{
  return await periodsDB.destroy({
    where: { id: id }
})
}
exports.updatePeriodById=async(id, dataToUpdate)=>{
    return await periodsDB.update(dataToUpdate, {
          where: { id: id }
        })
  }