interface ProductAttributes {
  id: number
  name: string
  regularPrice: number
  salePrice?: number
  description: string
  productImages: string[]
  stock: number
  tags: string[]
  reviews?: review[]
  seller: seller
  dimensions: dimensions
  material: string[]
  variants: variant[]
  categoryId: number

  createdAt: Date
  updatedAt: Date
}

interface seller {
  name: string
  location: string
  contact: string
  email: string
}

interface dimensions {
  height: string
  width: string
  weight: string
}

interface review {
  id: number
  rating: number
  comment: string
  createdAt: Date
  updatedAt: Date
}

interface variant {
  color: string
  size: string
  stock: number
  images: string[]
}



export { ProductAttributes, seller, dimensions, review, variant}
