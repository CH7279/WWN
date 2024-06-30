const db = require("../models/index")
const bank_AccountsDB = db.bank_Accounts;

exports.createBank_Account = async (bank_Account) => {
  return await bank_AccountsDB.create(bank_Account)
}

exports.getbank_AccountById = async (id) => {
  return await bank_AccountsDB.findByPk(id)
}

exports.updateBank_AccountById = async (id, dataToUpdate) => {
  return await bank_AccountsDB.update(dataToUpdate, {
    where: { id: id }
  })
}

exports.deleteBank_AccountById = async (id) => {
  return await bank_AccountsDB.destroy({
    where: { id: id }
  })
}