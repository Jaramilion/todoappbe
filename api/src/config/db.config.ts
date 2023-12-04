import mysql from 'mysql'
import dotenv from 'dotenv'
import config from './config'


dotenv.config()

const dbConfig = {
    host: config.dbHost,
    port: config.dbPort,
    user: config.dbUser,
    password:config.dbPassword,
    database:config.dbName 
}
const dbConnection = mysql.createConnection(dbConfig)

export default dbConnection