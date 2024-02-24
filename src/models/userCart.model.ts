import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../configs/sequelize.config'
import {
  UserCartAttributes,
  UserCartItemsAttributes
} from '../types/userCart.types'

interface UserCartCreationAttributes
  extends Optional<UserCartAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class UserCartModel
  extends Model<UserCartAttributes, UserCartCreationAttributes>
  implements UserCartAttributes
{
  public id!: number
  public userId!: number
  public cartItems!: UserCartItemsAttributes[]
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

UserCartModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cartItems: {
      type: DataTypes.JSON,
      allowNull: false
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
    modelName: 'UserCart'
  }
)

export default UserCartModel