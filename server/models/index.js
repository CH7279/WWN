
const dbConfig = require('../dbConfig/dbConfig');
const { Sequelize, DataTypes } = require('sequelize');
const { DB } = require('../dbConfig/dbConfig');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
}
)
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.places = require('./Places')(sequelize, DataTypes)
db.notes = require('./Notes')(sequelize, DataTypes)
db.Places_to_add = require('./Places_to_add')(sequelize, DataTypes)
db.requests = require('./Requests')(sequelize, DataTypes)
db.bank_Accounts= require('./Bank_Accounts')(sequelize, DataTypes)
db.messengers= require('./Messengers')(sequelize, DataTypes)
db.messengers_in_places= require('./Messengers_in_places')(sequelize, DataTypes)
db.messengers_to_adds= require('./Messengers_to_add')(sequelize, DataTypes)
db.stories= require('./Stories')(sequelize, DataTypes)
db.periods= require('./Periods')(sequelize, DataTypes)
db.stories_to_adds= require('./Stories_to_add')(sequelize, DataTypes)
db.messengers_in_places.belongsTo(db.requests, {foreignKey:'id_request'})
db.requests.belongsTo(db.places, {foreignKey:'id_place'})
db.requests.belongsTo(db.periods, {foreignKey:'id_period'})
db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync done!')
    })
module.exports = db
