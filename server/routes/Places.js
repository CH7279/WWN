const express=require("express")
const places = require("../controllers/Places");
const placesRouter = express.Router();


placesRouter.route("/")
    .get(places.getAllPlaces)
    .post(places.createPlace)
placesRouter.route("/:id")
    .get(places.getplaceById)
    .delete(places.deleteplaceById)
    .put(places.updateplaceById)  
placesRouter.route("/address/:address") 
    .get(places.getplaceByAddress)
placesRouter.route("/name/:name") 
    .get(places.getplaceByName)
placesRouter.route("/segula/:segula") 
    .get(places.getplaceBySegula)
    
module.exports = placesRouter;