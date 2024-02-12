/* ------------------- Import Packages ------------------- */
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import User from '../models/user.model'
import bcrypt from 'bcrypt'

/* ----------- Passport Auth via Local Strategy ----------- */
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false
    },
    async function (email, password, done) {
      try {
        const user = await User.findOne({ where: { email } })
        if (!user) {
          return done(null, false, { message: 'Incorrect email.' })
        }
        const pepper = process.env.PEPPER
        console.log(pepper)
        const hashedPassword = await bcrypt.hash(
          password + process.env.PEPPER,
          user.salt
        )
        console.log('Input Password:', password)
        console.log('Hashed Password:', hashedPassword)
        console.log('Database Password:', user.password)
        if (user.password === hashedPassword) {
          return done(null, user)
        } else {
          return done(null, false, { message: 'Incorrect password.' })
        }
      } catch (error) {
        return done(error)
      }
    }
  )
)
