import express, { Request, Response } from 'express'
import UserCartModel from '../models/userCart.model'
import {
  UserCartItemsAttributes
} from '../types/userCart.types'

const router = express.Router()

router.post('/create-cart', async (req: Request, res: Response) => {
  const {
    userId,
    cartItems
  }: { userId: number; cartItems: UserCartItemsAttributes[] } = req.body

  try {
    const existingUserCart = await UserCartModel.findOne({
      where: { userId }
    })

    if (existingUserCart) {
      // Update the quantity for existing products, and add new products
      const updatedCartItems = existingUserCart.cartItems.map(
        (existingItem) => {
          const newItem = cartItems.find(
            (item) => item.productId === existingItem.productId
          )
          if (newItem) {
            // If the product already exists, update the quantity
            return {
              productId: existingItem.productId,
              quantity: existingItem.quantity + newItem.quantity
            }
          }
          // If the product doesn't exist in the existing cart, keep it unchanged
          return existingItem
        }
      )

      // Add new products that don't exist in the existing cart
      cartItems.forEach((newItem) => {
        if (
          !existingUserCart.cartItems.some(
            (existingItem) => existingItem.productId === newItem.productId
          )
        ) {
          updatedCartItems.push(newItem)
        }
      })

      // Update the cart with the modified cart items
      await existingUserCart.update({
        cartItems: updatedCartItems
      })

      return res.status(200).json(existingUserCart)
    }

    // If the user cart doesn't exist, create a new one
    const newUserCart = await UserCartModel.create({
      userId,
      cartItems
    })

    return res.status(201).json(newUserCart)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router
