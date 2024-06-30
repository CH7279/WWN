var place_to_addsDB = require("../dal/Places_to_add");
const base64toFile = require('node-base64-to-file');
const path = require("path")
const {v4:uuid} = require("uuid")

const createPlace_to_add =async (req, res) => {
  let imagePath=""
  const folder = path.join(__dirname, "..", "public", "images")
  const filename = `${uuid()}`
  const fileUrl  =`${folder}\\${filename}`
  const base64String=req.body.image;
  console.log(req.body.image);
 try {
  imagePath = await base64toFile(base64String, { filePath:folder, fileName:filename, types: ['jpeg'], fileMaxSize: 3145728 });
 

  } catch (error) {
   return res.status(400).json({ message: 'error occured while loading image'})
  }
    req.body.image=fileUrl;

    place_to_addsDB.createplace_to_add(req.body)
    .then(()=>{
        res.send(`add place_to_add`);
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message||"Some error occurred while creating Place-to-add."
        });
    });

}
getAllPlaces_to_add =  (req, res) => {
   
    place_to_addsDB.getAllplaces_to_add()
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

 getPlace_to_addById =  (req, res) => {
    place_to_addsDB.getplace_to_addById(req.params.id)
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


deletePlace_to_addById = (req, res) => {
    place_to_addsDB.deleteplace_to_addById(req.params.id)
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

module.exports = {
    createPlace_to_add,
    getAllPlaces_to_add,  
    getPlace_to_addById, 
    deletePlace_to_addById
}