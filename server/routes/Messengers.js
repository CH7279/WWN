const express=require("express")
const messengers = require("../controllers/Messengers");
const messengersRouter = express.Router();

messengersRouter.route("/login/:email/:password")
    .get(messengers.login)
messengersRouter.route("/name/:name")
    .get(messengers.getMessengerByName)
messengersRouter.route("/place/:place")
    .get(messengers.getMessengerByPlace)
messengersRouter.route("/password/:password")
    .get(messengers.getMessengerByPassword)
messengersRouter.route("/is_active/:is_active")
    .get(messengers.getMessengerByActivation)
messengersRouter.route("/")
    .get(messengers.getAllMessengers)
    .post(messengers.createMessenger)
messengersRouter.route("/id/:id")
    .get(messengers.getMessengerById)
    .delete(messengers.deleteMessengerById)
    .put(messengers.updateMessengerById)
messengersRouter.route("/send")
    .post(messengers.send)

module.exports = messengersRouter;