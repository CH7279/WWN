const db = require("../models/index")
const StoriesDB = db.stories;
const { Op } = require('sequelize');

exports.createStory = async (Storie) => {
  return await StoriesDB.create(Storie)
}

exports.getAllStories = async () => {
  return await StoriesDB.findAll()
}

exports.getStoryById = async (id) => {
  return await StoriesDB.findByPk(id)
}

exports.updateStoryById = async (id, dataToUpdate) => {
  return await StoriesDB.update(dataToUpdate, {
    where: { id: id }
  })
}

exports.deleteStoryById = async (id) => {
  return await StoriesDB.destroy({
    where: { id: id }
  })
}
exports.getStoryByTitle = async (_title) => {
  return await StoriesDB.findAll({
    where: { title: { [Op.substring]: _title } }
  })
}
exports.getStoryByPlace_id = async (id) => {
  return await StoriesDB.findAll({
    where: { Place_id:id }
  })
}
