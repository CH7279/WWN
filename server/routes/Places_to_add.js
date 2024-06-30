const express=require("express")
const places_to_add = require("../controllers/Places_to_add");
const places_to_addRouter = express.Router();


places_to_addRouter.route("/")
    .get(places_to_add.getAllPlaces_to_add)
    .post(places_to_add.createPlace_to_add)

places_to_addRouter.route("/:id")
    .get(places_to_add.getPlace_to_addById)
    .delete(places_to_add.deletePlace_to_addById)
    
module.exports = places_to_addRouter;