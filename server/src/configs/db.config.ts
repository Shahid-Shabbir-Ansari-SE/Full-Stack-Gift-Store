/* ---------------- Package imports --------------- */
import { Pool, PoolConfig } from 'pg'
import dotenv from 'dotenv'
import { testDatabaseConnection } from './sequelize.config'

/* ------------------- Configs -------------------- */
dotenv.config()

/* ------------- Database Credentials ------------- */
interface DatabaseConfig {
  user: string
  password: string
  host: string
  port: number
  database: string
  ssl: boolean
  sslmode: string
}

/* ---------- PostgreSQL Connection Pool ---------- */
const createPool = () => {
  const dbConfig: DatabaseConfig = {
    user: process.env.POSTGRES_USER || '',
    password: process.env.POSTGRES_PASSWORD || '',
    host: process.env.POSTGRES_HOST || '',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    database: process.env.POSTGRES_DATABASE || '',
    ssl: true,
    sslmode: 'require'
  }

  return new Pool(dbConfig as PoolConfig)
}

/* ---------- Database Connection ---------- */
const connectToDatabase = async () => {
  const pool = createPool()
  try {
    await pool.connect()
    console.log('Connected to PostgreSQL database')
    await testDatabaseConnection()
  } catch (error) {
    console.error(
      'Error connecting to PostgreSQL database',
      (error as Error).message
    )
  } finally {
    pool.end()
  }
}

export default connectToDatabase
