/* ------------------ Import Packages ------------------ */
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectToDatabase from './configs/db.config'
import { sequelize } from './configs/sequelize.config'
import authRoutes from './routes/auth.routes'
import './configs/passport.config'
import passport from 'passport'
import productsRoutes from './routes/product.routes'

/* ------------- Initialize Express & Port ------------- */
const app = express()
const port = process.env.APP_PORT || 3000 // Set a default port if APP_PORT is not defined

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
}

/* ------------------- Middlewares -------------------- */
dotenv.config()
app.use(cors(corsOptions))
app.use(express.json())
app.use(passport.initialize())

/* ------------------- Connect to DB ------------------- */
connectToDatabase()

/* ------------------- Sync Database ------------------- */
sequelize.sync().then(() => {
  console.log('Database and tables synced.')
})

/* ---------------------- Routes ---------------------- */
app.use('/auth', authRoutes)
app.use('/products', productsRoutes)

/* ------------------- Server Listen ------------------- */
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
