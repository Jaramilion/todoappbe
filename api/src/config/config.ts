import dotenv from 'dotenv'

dotenv.config()

const config = {
    dbHost: process.env.DB_HOST!,
    dbPort: parseInt(process.env.DB_PORT!),
    dbUser: process.env.DB_USER!,
    dbPassword:process.env.DB_PASSWORD!,
    dbName:process.env.DB_NAME!,
    appPort: process.env.PORT!
}

export default config

 