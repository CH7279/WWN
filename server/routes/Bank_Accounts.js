const express=require("express")
const Bank_Accounts = require("../controllers/Bank_Accounts");
const Bank_AccountsRouter = express.Router();


Bank_AccountsRouter.route("/")
    .post(Bank_Accounts.createBank_Account)
Bank_AccountsRouter.route("/:id")
    .get(Bank_Accounts.getBank_AccountById)
    .delete(Bank_Accounts.deleteBank_AccountsById)
    .put(Bank_Accounts.updateBank_AccountById)

module.exports = Bank_AccountsRouter;