var PlacesDB = require("../dal/Places");


createPlace = (req, res) => {
  
    PlacesDB.createPlace(req.body)
    .then(data=>{
        res.send(`add place ${data}`);
    })
    .catch(err=>{
      
        res.status(500).send({
            message:
            err.message||"Some error occurred while creating Place."
        });
    });

}
getAllPlaces =  (req, res) => {
   
    PlacesDB.getAllPlaces()
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
getplaceById =  (req, res) => {
    PlacesDB.getplaceById(req.params.id)
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
updateplaceById = (req, res) => {  
    PlacesDB.updateplaceById(req.params.id, req.body)
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
deleteplaceById = (req, res) => {
    PlacesDB.deleteplaceById(req.params.id)
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
getplaceByAddress=  (req, res) => {
  PlacesDB.getplaceByAddress(req.params.address)
      .then(data => {
          if (data) {
            res.send(data);
          } else {
            res.status(400).send({
              message: `Cannot find Places with address=${req.params.address}.`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving Places with address=" + req.params.address
          });
        });
  
}
getplaceByName =  (req, res) => {
  PlacesDB.getplaceByName(req.params.name)
      .then(data => {
          if (data) {
            res.send(data);
          } else {
            res.status(400).send({
              message: `Cannot find Places with name=${req.params.name}.`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving Places with name=" + req.params.name
          });
        });
  
}
getplaceBySegula=  (req, res) => {
  PlacesDB.getplaceBySegula(req.params.segula)
      .then(data => {
          if (data) {
            res.send(data);
          } else {
            res.status(400).send({
              message: `Cannot find Places with segula=${req.params.segula}.`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving Places with segula=" + req.params.segula
          });
        });
  
}

module.exports = {
    createPlace,
    getAllPlaces,  
    getplaceById, 
    updateplaceById,
    deleteplaceById,
    getplaceByAddress,
    getplaceByName,
    getplaceBySegula
}