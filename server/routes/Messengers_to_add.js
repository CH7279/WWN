const express=require("express")
const messengers_to_add = require("../controllers/Messengers_to_add");
const messengers_to_addRouter = express.Router();


messengers_to_addRouter.route("/")
    .get(messengers_to_add.get_All_messengers_to_add)
    .post(messengers_to_add.create_messengers_to_add)
messengers_to_addRouter.route("/:id")
    .get(messengers_to_add.get_messengers_to_add_ById)
    .delete(messengers_to_add.delete_messengers_to_add_ById)
    .put(messengers_to_add.update_messengers_to_add)
messengers_to_addRouter.route("/password/:password")
    .get(messengers_to_add.getmessengers_to_addByPassword)
    
module.exports = messengers_to_addRouter;