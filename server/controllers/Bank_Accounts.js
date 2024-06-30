var Bank_AccountsDB = require("../dal/Bank_Accounts");
var sendEmail=require("../services/Email")


 createBank_Account =  (req, res) => {  
    Bank_AccountsDB.createBank_Account(req.body)
    .then(data=>{
        res.send(`add Bank_Account ${data}`);
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message||"Some error occurred while creating reciept."
        });
    });

}

 deleteBank_AccountsById =  (req, res) => {
    Bank_AccountsDB.deleteBank_AccountById(req.params.id)
    .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${req.params.id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + req.params.id
        });
      });

}

updateBank_AccountById =  (req, res) => {
    Bank_AccountsDB.updateBank_AccountById(req.params.id, req.body)
    .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${req.params.id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + req.params.id
        });
      });
}

getBank_AccountById =  (req, res) => {
    Bank_AccountsDB.getbank_AccountById(req.params.id)
    .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(400).send({
            message: `Cannot find Tutorial with id=${req.params.id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + req.params.id
        });
      });
}



module.exports = {
    updateBank_AccountById,
    getBank_AccountById,
    deleteBank_AccountsById,
    createBank_Account
}