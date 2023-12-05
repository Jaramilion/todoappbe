import config from "../config/config"

import {Sequelize} from 'sequelize'
import setupModels from "../models"

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

module.exports = sequelize