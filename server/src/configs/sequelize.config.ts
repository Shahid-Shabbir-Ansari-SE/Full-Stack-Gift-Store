/* ------------------- Import Packages ------------------- */
import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

/* ----------- Initialize Sequelize Connection ----------- */
const database = String(process.env.POSTGRES_DATABASE)
const username = String(process.env.POSTGRES_USER)
const password = String(process.env.POSTGRES_PASSWORD)
const sequelize = new Sequelize(database, username, password, {
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  dialect: 'postgres'
})

/* ---------- Test Sequelize Database Connection --------- */
async function testDatabaseConnection() {
  try {
    await sequelize.authenticate()
    console.log('Sequelize connection successful')
  } catch (error) {
    console.error('Sequelize connection error:', error)
  }
}

export { sequelize, testDatabaseConnection }
