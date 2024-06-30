var MessengersDB = require("../dal/Messengers");
var sendEmail = require("../services/Email");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const fs = require('fs');
const { log } = require("console");

const login = async (req, res) => {
  if (!req.params.email || !req.params.password) {
    return res.status(400).json({
      message: 'All fields are required'
    })
  }
  // const data = await MessengersDB.getMessengerByEmail(req.params.email);
  // if (!data || !data.password) {
 
  //   return res.status(401).json({ message: 'Unauthorized' })
  // }
  // const match =await bcrypt.compare(req.params.password, data.password);
  // console.log(match);
  // if (!match) return res.status(401).json({ message: 'Unauthorized' })

  // const userInfo = {
  //   id: data.id, name: data.name,
  //   img: data.img, phone: data.phone, place: data.place, is_active: data.is_active
  // }
 
  // res.send(userInfo)
  const foundUser = await MessengersDB.getMessengerByEmail(req.params.email);       
  if (!foundUser ) {
      return res.status(401).json({ message: 'Unauthorized user' })
  }
  const match = await bcrypt.compare(req.params.password, foundUser.password);
  if (!match) return res.status(401).json({ message: 'Unauthorized password' })
  if(foundUser.image)
  foundUser.image=fs.readFileSync(foundUser.image, { encoding: 'base64' });
  res.send(foundUser);
}

const createMessenger = async (req, res) => {
  if (!req.body.name  || !req.body.password
    || !req.body.email || !req.body.phone) {
    return res.status(400).json({
      message: 'All fields are required'
    })
  }
 
  const data = await MessengersDB.getMessengerByEmail(req.body.email);
console.log(data);
  if (data!=null) {
    return res.status(409).json({ message: "Duplicate username" })
  }

  let newPassword = req.body.password;
  let newPassword1=newPassword.toString();
  const hashedPwd = await bcrypt.hash(newPassword1, 10)
  req.body.password = hashedPwd;
  MessengersDB.createMessenger(req.body)
    .then(data => {
      sendEmail.sendEmail(data.email, "join sucssesed!!", "Hello " + data.name + "!\nThank for join");
      //sendEmail.sendEmailWithAttachment(data.email,'example.jpg','M:\\project\\server_new\\example.jpg');
      res.send(`add Messenger`);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating Messenger."
      });
    });
}

getAllMessengers = (req, res) => {
  MessengersDB.getAllMessengers()
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

updateMessengerById = (req, res) => {

  MessengersDB.updateMessengerById(req.params.id, req.body)
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Messenger was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Messenger with id=${req.params.id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      console.log("errrrrr"+err);
      res.status(500).send({
        message: "Error updating Messenger with id=" + req.params.id
      });
    });

}

getMessengerById = (req, res) => {
  MessengersDB.getMessengerById(req.params.id)
    .then(data => {
      console.log(data);
      console.log("iiiiiiiii"+data.image);
      if (data) {
        const obj={
          "id": data.id,
          "password": data.password,
          "name": data.name,
          "id_Bank": data.id_Bank,
          "image":data.image,
          // "image": fs.readFileSync(data.image, { encoding: 'base64' }),
          "email": data.email,
          "phone": data.phone,
          "place": data.place,
          "is_active": data.is_active,
          "sms": data.sms,
          "popup": data.popup
      }

      console.log("iiiiiiiii"+obj.image);
        res.send(obj);
      } else {
        res.status(400).send({
          message: `Cannot find Messenger with id=${req.params.id}.`
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message: "Error retrieving Messenger with id=" + req.params.id
      });
    });

}

deleteMessengerById = (req, res) => {
  MessengersDB.deleteMessengerById(req.params.id)
    .then(num => {
      if (num == 1) {
        sendEmail.sendEmail(data.email, "Delete sucssesed!!", "Hello " + data.name + "!\nThank you");
        res.send({
          message: "Messenger was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Messenger with id=${req.params.id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Messenger with id=" + req.params.id
      });
    });
}

getMessengerByName = (req, res) => {
  MessengersDB.getMessengerByName(req.body.name)
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

getMessengerByPlace = (req, res) => {
  console.log(req.params.place)
  MessengersDB.getMessengerByPlace(req.params.place)
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

getMessengerByPassword = (req, res) => {//לא עובד אין לו אפשרות זיהוי סיסמא
  MessengersDB.getMessengerByPassword(req.params.password)
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

getMessengerByActivation = (req, res) => {
  if (req.params.is_active)
    MessengersDB.getMessengerByActivation(1)
  else
    MessengersDB.getMessengerByActivation(0)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Active."
        });
      });
}
const send=(req, res)=>{

  sendEmail.ReceiveEmail(req.body.email, req.body.about, req.body.send) 
  .then(function () {
    console.log("seccsid");
   res.send("seccsid")
    
  })
.catch(function () {
  console.log("?????");
  
})
.finally(function () {

});

}

module.exports = {
  login,
  createMessenger,
  getAllMessengers,
  updateMessengerById,
  deleteMessengerById,
  getMessengerById,
  getMessengerByName,
  getMessengerByPlace,
  getMessengerByPassword,
  getMessengerByActivation,
  send
}