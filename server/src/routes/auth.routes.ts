/* ------------------- Import Packages ------------------- */
import express, { Request, Response, NextFunction } from 'express'
import User from '../models/user.model'
import generatedToken from '../middlewares/genToken.middleware'
import passport from 'passport'
import bcrypt from 'bcrypt'
import { authenticateUser } from '../middlewares/verifyToken.middleware'

const router = express.Router()

/* ----------------- Register User Route ----------------- */
router.post(
  '/register',
  async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, email, password } = req.body
    try {
      const pepper = process.env.PEPPER
      const saltRounds = 10
      const salt = await bcrypt.genSalt(saltRounds)
      const hashedPassword = await bcrypt.hash(password + pepper, salt)
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        salt
      })
      generatedToken(req, res, next, newUser)
      res.json(newUser)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
)

/* ------------------ Login User Route ------------------- */
router.post('/sign-in', (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate(
    'local',
    { session: false },
    (err: Error, user: User | false, info: { message?: string }) => {
      if (err) {
        return next(err)
      }
      if (!user) {
        return res
          .status(401)
          .json({ message: info.message || 'Authentication failed' })
      }
      generatedToken(req, res, next, user)
      return res.json({ message: 'Login successful', user, generatedToken })
    }
  )(req, res, next)
})

/* ----------------- Verify Token Route ------------------ */
router.get('/verify-token', authenticateUser, (req: Request, res: Response) => {
  res.json({ message: 'Token is valid', user: req.user })
})

export default router
