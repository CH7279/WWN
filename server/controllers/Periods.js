var periodsDB = require("../dal/Periods");

createPeriod = (req, res) => {
    periodsDB.createPeriod(req.body)
    .then(data=>{
      const arr=[`add Period`,data];
        res.send(arr);
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message||"Some error occurred while creating Period."
        });
    });

}

getPeriodById =  (req, res) => {
    periodsDB.getPeriodById(req.params.id)
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


deletePeriodById = (req, res) => {
    periodsDB.deletePeriodById(req.params.id)
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

updatePeriodById =  (req, res) => {
    periodsDB.updatePeriodById(req.params.id, req.body)
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


module.exports = {
    createPeriod,
    getPeriodById,  
    deletePeriodById, 
    updatePeriodById
}