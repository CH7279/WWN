const express=require("express")
const messengers_in_places = require("../controllers/Messengers_in_places");
const messengers_in_placesRouter = express.Router();


messengers_in_placesRouter.route("/")
    .get(messengers_in_places.get_All_Messengers_In_Places)
    .post(messengers_in_places.create_Messengers_In_Places)
messengers_in_placesRouter.route("/:id")
    .get(messengers_in_places.get_Messengers_In_Places_ById)
    .delete(messengers_in_places.delete_Messengers_In_Places_ById)
    .get(messengers_in_places.get_Messengers_In_Places_ById)
messengers_in_placesRouter.route("/getRequestsOfMessengers/:id")
    .get(messengers_in_places.getRequestsOfMessengers)
messengers_in_placesRouter.route("/idRequest/:id")
.get(messengers_in_places.get_Messengers_In_Places_ByIdRequest)

    
    
module.exports = messengers_in_placesRouter;