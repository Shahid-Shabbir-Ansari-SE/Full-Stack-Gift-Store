export interface UserCartItemsAttributes {
  productId: number
  quantity: number
}

export interface UserCartAttributes {
  id: number
  userId: number
  cartItems: UserCartItemsAttributes[]
  createdAt: Date
  updatedAt: Date
}
