const express=require("express")
const notes = require("../controllers/Notes");
const notesRouter = express.Router();


notesRouter.route("/")
    .get(notes.getAllnotes)
    .post(notes.createnote)

notesRouter.route("/id/:id")
    .get(notes.getnoteById)
    .delete(notes.deletenoteById)
    
notesRouter.route("/place_id/:place_id")
    .get(notes.getnoteByPlace_id)
    
module.exports = notesRouter;
