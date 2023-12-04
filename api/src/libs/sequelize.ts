import config from "../config/config"

const { Sequelize } = require('sequelize')

const setupModels = require('../models')



const sequelize = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPassword,
    {
        host: config.dbHost,
        dialect: 'mysql'
    }
)

sequelize.sync()
setupModels(sequelize)

export default sequelize