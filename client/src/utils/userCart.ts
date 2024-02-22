import axios from 'axios'
import { cartProductsAtom, userIDAtom } from '@/states/cartAtom'
import {fetchUserID} from '@/hooks/fetchUserID'
import { CartProduct, Cart } from '@/types/cart'
import { atom, useAtom } from 'jotai'

export const addToCart = async (CartProduct: CartProduct[]) => {
  const userId = await fetchUserID()
  const userCartURL = 'http://localhost:8080/user-cart/'

  const data: Cart = {
    userId: userId,
    cartItems: CartProduct
  }

  try {
    const response = await axios.post(`${userCartURL}create-cart`, data)
    return response.data
  } catch (error: any) {
    console.error('Error adding to cart:', error.message)
    throw error
  }
}
