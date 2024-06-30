var StoriesDB = require("../dal/Stories");


createStory = (req, res) => {
    StoriesDB.createStory(req.body)
    .then(data=>{
        res.send(`add Story ${data}`);
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message||"Some error occurred while creating reciept."
        });
    });
}

getAllstories =  (req, res) => { 
    StoriesDB.getAllStories()
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

getStoryById =  (req, res) => {
    StoriesDB.getStoryById(req.params.id)
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

updateStoryById = (req, res) => {  
    StoriesDB.updateStoryById(req.params.id, req.body)
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

deleteStoryById = (req, res) => {
    StoriesDB.deleteStoryById(req.params.id)
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
getStoryByTitle=  (req, res) => {
  StoriesDB.getStoryByTitle(req.params.title)
      .then(data => {
        
          if (data) {
            res.send(data);
          } else {
            res.status(400).send({
              message: `Cannot find Stories with title=${req.params.title}.`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error find Stories with title=" + req.params.title
          });
        });
  
}
getStoryByPlace_id=  (req, res) => {
  StoriesDB.getStoryByPlace_id(req.params.place_id)
      .then(data => {
        
          if (data) {
            res.send(data);
          } else {
            res.status(400).send({
              message: `Cannot find Stories with title=${req.params.place_id}.`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error find Stories with title=" + req.params.place_id
          });
        });
  
}
module.exports = {
    createStory,
    getAllstories,  
    getStoryById, 
    updateStoryById,
    deleteStoryById,
    getStoryByTitle,
    getStoryByPlace_id
}