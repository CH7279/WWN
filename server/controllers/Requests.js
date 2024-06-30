var requestDB = require("../dal/Requests");

createRequest = (req, res) => {     
  requestDB.createRequest(req.body)
  .then(data=>{
      res.send(`add Request`);
  })
  .catch(err=>{
      res.status(500).send({
          message:
          err.message||"Some error occurred while creating Request."
      });
  });


}

getAllRequests = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    requestDB.getAllRequests(condition)
    .then(data => {
        res.send(data);
       })
       .catch(err => {
       res.status(500).send({
           message:
           err.message || "Some error occurred while retrieving Requests."
        });
       });  
}



deleteRequestById = (req, res) => {
    requestDB.deleteRequestById(req.params.id)
    .then(num => {
        if (num == 1) {
          res.send({
            message: "Request was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Request with id=${req.params.id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Request with id=" + req.params.id
        });
      });
}

getRequestById=  (req, res) => {
    requestDB.getRequestById(req.params.id)
        .then(data => {
            if (data) {
              res.send(data);
            } else {
              res.status(400).send({
                message: `Cannot find Request with id=${req.params.id}.`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error retrieving Request with id=" + req.params.id
            });
          });
}

updateRequestById =  (req, res) => { 
    requestDB.updateRequestById(req.params.id, req.body)
    .then(num => {
        if (num == 1) {
          res.send({
            message: "Request was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Request with id=${req.params.id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Request with id=" + req.params.id
        });
      });
}

getRequestBycacth=  (req, res) => {
  requestDB.getRequestBycacth()
      .then(data => {
          if (data) {
            res.send(data);
          } else {
            res.status(400).send({
              message: `Cannot find Request.`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving Request"
          });
        });
}

getRequestByidUser=  (req, res) => {
  requestDB.getRequestByidUser(req.params.id)
      .then(data => {
          if (data) {
            res.send(data);
          } else {
            res.status(400).send({
              message: `Cannot find Request.`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving Request"
          });
        });
}


module.exports = {
    getRequestById,
    createRequest,
    deleteRequestById,
    getAllRequests,    
    updateRequestById,
    getRequestBycacth,
    getRequestByidUser
    
}