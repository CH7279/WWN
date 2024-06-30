const express=require("express")
const stories = require("../controllers/Stories");
const storiesRouter = express.Router();


storiesRouter.route("/")
    .get(stories.getAllstories)
    .post(stories.createStory)
storiesRouter.route("/:id")
    .get(stories.getStoryById)
    .delete(stories.deleteStoryById)
    .put(stories.updateStoryById)
storiesRouter.route("/title/:title")
    .get(stories.getStoryByTitle)
storiesRouter.route("/place_id/:place_id")
    .get(stories.getStoryByPlace_id)

    
module.exports = storiesRouter;