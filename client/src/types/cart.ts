export interface CartProduct {
  productId: number
  quantity: number
}

export interface Cart {
  userId: number
  cartItems: CartProduct[]
}
