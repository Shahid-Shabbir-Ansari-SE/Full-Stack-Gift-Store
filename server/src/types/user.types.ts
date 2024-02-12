interface UserAttributes {
  id: number
  firstName: string
  lastName: string
  email: string
  password: string
  salt: string
  wishlist?: number[]
  recentlyViewed?: number[]
  contactNumber?: string
  address?: string
  country?: string
  createdAt: Date
  updatedAt: Date
}

export default UserAttributes
