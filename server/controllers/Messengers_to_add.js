var messengers_to_addDB = require("../dal/messengers_to_add");
var sendEmail = require("../services/Email");
const base64toFile = require('node-base64-to-file');
const path = require("path")
const {v4:uuid} = require("uuid")

const create_messengers_to_add =async (req, res) => {
  let imagePath=""
  const folder = path.join(__dirname, "..", "public", "images")
  const filename = `${uuid()}`
  const filename1 = `${uuid()}`
  const filename2 = `${uuid()}`
  const fileUrl  =`${folder}\\${filename}`
  const fileUrl1  =`${folder}\\${filename1}`
  const fileUrl2 =`${folder}\\${filename2}`
  const base64StringImgPropil=req.body.imgPropil;
  const base64StringImgId=req.body.imgId;
  const base64StringImgFace=req.body.imgFace;

  try {
    imagePath = await base64toFile(base64StringImgPropil, { filePath:folder, fileName:filename, types: ['jpeg'], fileMaxSize: 3145728 });
    imagePath = await base64toFile(base64StringImgId, { filePath:folder, fileName:filename1, types: ['jpeg'], fileMaxSize: 3145728 });
    imagePath = await base64toFile(base64StringImgFace, { filePath:folder, fileName:filename2, types: ['jpeg'], fileMaxSize: 3145728 });
   
  
    } catch (error) {
     return res.status(400).json({ message: 'error occured while loading image'})
    }
    req.body.imgPropil=fileUrl;
    req.body.imgId=fileUrl1;
    req.body.imgFace=fileUrl2;
    messengers_to_addDB.createMessengers_to_add(req.body)
    .then(data => {
      sendEmail.sendEmail(data.email, "Your request to be a messenger is almost complete!!", "Hello " + data.name + "!\nYour request has been sent, if you match, we will send you a message");
      res.send(`add messengers_to_add`);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating messengers to add."
      });
    });
}

delete_messengers_to_add_ById = (req, res) => {
  messengers_to_addDB.deleteMessengers_to_addById(req.params.id)
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

update_messengers_to_add = (req, res) => {
  messengers_to_addDB.updateMessengers_to_addById(req.params.id, req.body)
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

get_messengers_to_add_ById = (req, res) => {
  messengers_to_addDB.getMessengers_to_addById(req.params.id)
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

get_All_messengers_to_add = (req, res) => {
  messengers_to_addDB.getAllMessengers_to_add()
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

getmessengers_to_addByPassword = (req, res) => {
  messengers_to_addDB.getmessengers_to_addByPassword(req.params.password)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Password."
      });
    });
}


module.exports = {
  get_All_messengers_to_add,
  update_messengers_to_add,
  create_messengers_to_add,
  get_messengers_to_add_ById,
  delete_messengers_to_add_ById,
  getmessengers_to_addByPassword
}