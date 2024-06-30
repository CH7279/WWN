var notesDB = require("../dal/Notes");

createnote = (req, res) => {
  console.log(req.body.name_to_prayer,req.body.request);
    const note={
            name_to_prayer:req.body.name_to_prayer,
            request:req.body.request,
            nameUser:req.body.nameUser,
            emailUser:req.body.emailUser,
            phonUser:req.body.phonUser
         
        }
    notesDB.createnote(note)
    .then(()=>{
        res.send(`add note`);
    })
    .catch(err=>{
      
        res.status(500).send({
            message:
            err.message||"Some error occurred while creating note."
        });
    });

}
getAllnotes =  (req, res) => {
   
    notesDB.getAllnotes()
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

 getnoteById =  (req, res) => {
    notesDB.getnoteById(req.params.id)
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


deletenoteById = (req, res) => {

    var id = req.params.id;
    notesDB.deletenoteById(req.params.id)
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

getnoteByPlace_id =  (req, res) => {
  notesDB.getnoteByPlace_id(req.params.place_id)
      .then(data => {
          if (data) {
            res.send(data);
          } else {
            res.status(400).send({
              message: `Cannot find Tutorial with id=${req.params.place_id}.`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving Tutorial with id=" + req.params.place_id
          });
        });
  
}

module.exports = {
    createnote,
    getAllnotes,  
    getnoteById, 
    deletenoteById,
    getnoteByPlace_id
}