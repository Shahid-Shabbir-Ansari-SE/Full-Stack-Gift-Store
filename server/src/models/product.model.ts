import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../configs/sequelize.config'
import {
  ProductAttributes,
  dimensions,
  review,
  seller,
  variant
} from '../types/product.types'

interface ProductCreationAttributes
  extends Optional<ProductAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

class Product
  extends Model<ProductAttributes, ProductCreationAttributes>
  implements ProductAttributes
{
  public id!: number
  public name!: string
  public regularPrice!: number
  public salePrice!: number
  public description!: string
  public productImages!: string[]
  public stock!: number
  public tags!: string[]
  public reviews!: review[]
  public seller!: seller
  public dimensions!: dimensions
  public material!: string[]
  public variants!: variant[]
  public categoryId!: number
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    regularPrice: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    salePrice: {
      type: DataTypes.FLOAT
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    productImages: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    reviews: {
      type: DataTypes.ARRAY(DataTypes.JSONB)
    },
    seller: {
      type: DataTypes.JSONB,
      allowNull: false
    },
    dimensions: {
      type: DataTypes.JSONB,
      allowNull: false
    },
    material: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    variants: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
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
    tableName: 'products',
    timestamps: true
  }
)

export default Product