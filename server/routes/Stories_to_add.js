const express=require("express")
const stories_to_add = require("../controllers/Stories_to_add");
const stories_to_addRouter = express.Router();


stories_to_addRouter.route("/")
    .get(stories_to_add.getAllStoryToAdd)
    .post(stories_to_add.createStoryToAdd)
stories_to_addRouter.route("/:id")
    .get(stories_to_add.getStoryToAddById)
    .delete(stories_to_add.deleteStoryToAddById)
    .put(stories_to_add.updateStoryToAddById)
    
    
module.exports = stories_to_addRouter;