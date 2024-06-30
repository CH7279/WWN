var stories_to_addDB = require("../dal/stories_to_add");
const base64toFile = require('node-base64-to-file');
const path = require("path")
const {v4:uuid} = require("uuid")

const createStoryToAdd =async (req, res) => {  
  let imagePath=""
  const folder = path.join(__dirname, "..", "public", "images")
  const filename = `${uuid()}`
  const fileUrl  =`${folder}\\${filename}`
  const base64String=req.body.img;
 try {

  imagePath = await base64toFile(base64String, { filePath:folder, fileName:filename, types: ['jpeg'], fileMaxSize: 3145728 });

  } catch (error) {
     
   return res.status(400).json({ message: 'error occured while loading image'})
  }
    req.body.img=fileUrl;
    stories_to_addDB.createStoryToAdd(req.body)
    .then(()=>{
        res.send(`add StoryToAdd`);
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message||"Some error occurred while creating StoryToAdd."
        });
    });
}

deleteStoryToAddById =  (req, res) => {
    stories_to_addDB.deleteStoryToAddById(req.params.id)
    .then(num => {
        if (num == 1) {
          res.send({
            message: "StoryToAdd was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete StoryToAdd with id=${req.params.id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete StoryToAdd with id=" + req.params.id
        });
      }); 

}

updateStoryToAddById =  (req, res) => {
    stories_to_addDB.updateStoryToAddById(req.params.id, req.body)
    .then(num => {
        if (num == 1) {
          res.send({
            message: "StoryToAdd was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update StoryToAdd with id=${req.params.id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating StoryToAdd with id=" + req.params.id
        });
      });
}

getStoryToAddById =  (req, res) => {
    stories_to_addDB.getStoryToAddById(req.params.id)
        .then(data => {
            if (data) {
              res.send(data);
            } else {
              res.status(400).send({
                message: `Cannot find StoryToAdd with id=${req.params.id}.`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error retrieving StoryToAdd with id=" + req.params.id
            });
          });
}

getAllStoryToAdd =  (req, res) => {
    stories_to_addDB.getAllStoryToAdd()
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


module.exports = {
    createStoryToAdd,
    deleteStoryToAddById,
    updateStoryToAddById,
    getStoryToAddById,
    getAllStoryToAdd
}