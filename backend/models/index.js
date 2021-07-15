const Sequelize = require("sequelize")
const config = require("../config/config.json")["development"]

const User = require("../models/user")

const db = {}
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

db.sequelize = sequelize
db.User = User

User.init(sequelize)

module.exports = db
