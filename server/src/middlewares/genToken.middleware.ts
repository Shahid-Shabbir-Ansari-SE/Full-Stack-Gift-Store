/* ----------------- Import Packages ----------------- */
import Jwt from 'jsonwebtoken'
import User from '../models/user.model'
import { Request, Response, NextFunction } from 'express'

/* ------------------ Generate Token Function */
const generatedToken = (
  req: Request,
  res: Response,
  next: NextFunction,
  user: User
) => {
  try {
    const token = Jwt.sign({ id: user.id }, process.env.TOKEN_SECRET!)
    res.cookie('token', token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      domain: 'localhost',
      path: '/'
    })

    next()
  } catch (error) {
    next(error)
  }
}

export default generatedToken
