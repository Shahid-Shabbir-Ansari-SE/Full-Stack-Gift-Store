import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../configs/sequelize.config'
import bcrypt from 'bcrypt'
import UserAttributes from '../types/user.types'

interface UserCreationAttributes
  extends Optional<UserAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number
  public firstName!: string
  public lastName!: string
  public email!: string
  public password!: string
  public salt!: string
  public wishlist!: number[]
  public recentlyViewed!: number[]
  public contactNumber!: string
  public address!: string
  public country!: string
  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  public async setPassword(password: string): Promise<void> {
    try {
      const saltRounds = 10
      this.salt = await bcrypt.genSalt(saltRounds)
      this.password = await bcrypt.hash(password + this.salt, saltRounds)
    } catch (error) {
      if (error instanceof Error) {
        throw error
      } else {
        throw new Error('An unknown error occurred.')
      }
    }
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false
    },
    wishlist: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true
    },
    recentlyViewed: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true
    },
    contactNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  },
  {
    sequelize,
    tableName: 'users'
  }
)

;(async () => {
  await sequelize.sync()
})()

export default User
