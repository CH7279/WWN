const db = require("../models/index")
const stories_to_addDB = db.stories_to_adds; 


createStoryToAdd=(story)=>{
    return  stories_to_addDB.create(story)}

getAllStoryToAdd=async()=>{
    return await stories_to_addDB.findAll()}

getStoryToAddById=async(id)=>{
  return await stories_to_addDB.findByPk(id)}

updateStoryToAddById=async(id, dataToUpdate)=>{
    return await stories_to_addDB.update(dataToUpdate, {
          where: { id: id }})}

  deleteStoryToAddById=async(id)=>{
  return await stories_to_addDB.destroy({
    where: { id: id }})}
    
module.exports ={
    createStoryToAdd,
    getAllStoryToAdd,
    updateStoryToAddById,   
    deleteStoryToAddById,
    getStoryToAddById
}
