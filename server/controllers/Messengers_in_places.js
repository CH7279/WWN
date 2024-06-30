var messengers_in_placesDB = require("../dal/Messengers_in_places");


create_Messengers_In_Places = (req, res) => {  
  console.log();("innnnnnnnnnnnnnnnnnnnn")
    messengers_in_placesDB.createMessengers_In_Place(req.body)
    .then(data=>{
        res.send(`add Messengers_In_Places`);
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message||"Some error occurred while creating Messengers In Place."
        });
    });
}

delete_Messengers_In_Places_ById =  (req, res) => {
    messengers_in_placesDB.deleteMessengers_In_PlaceById(req.params.id)
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

update_Messengers_In_Places =  (req, res) => {
    messengers_in_placesDB.updateMessengers_In_PlaceById(req.params.id, req.body)
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

get_Messengers_In_Places_ById =  (req, res) => {
  messengers_in_placesDB.getMessengers_In_PlaceById(req.params.id)
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
get_Messengers_In_Places_ByIdRequest =  (req, res) => {
  messengers_in_placesDB.get_Messengers_In_Places_ByIdRequest(req.params.id)
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


get_All_Messengers_In_Places =  (req, res) => {
    messengers_in_placesDB.getAllMessengers_In_Places()
    .then(data => {
        res.send(data);
       })
       .catch(err => {
       res.status(500).send({
           message:
           err.message || "Some error occurred while retrieving reciepts."
        });
       });
}

getRequestsOfMessengers =  (req, res) => {
  messengers_in_placesDB.getRequestsOfMessengers(req.params.id)
  .then(data => {
    if (data) {
      res.send(data.map(x=>x.Request));
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
    get_All_Messengers_In_Places,
    update_Messengers_In_Places,
    create_Messengers_In_Places,
    get_Messengers_In_Places_ById,
    delete_Messengers_In_Places_ById,
    getRequestsOfMessengers,
    get_Messengers_In_Places_ByIdRequest
}