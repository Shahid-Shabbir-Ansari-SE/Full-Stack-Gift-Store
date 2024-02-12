import express, { Request, Response } from 'express'
import Product from '../models/product.model' // Assuming the Product model is in the specified location

const router = express.Router()

// Route to add a new product
router.post('/addProduct', async (req: Request, res: Response) => {
  try {
    const newProduct = await Product.create(req.body)
    return res.status(201).json(newProduct)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
})

// Route to get all products
router.get('/fetchAll', async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll()
    return res.json(products)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
})

// Route to get a product by id
router.get('/fetchById/:id', async (req: Request, res: Response) => {
  try {
    const product = await Product.findByPk(req.params.id)
    if (!product) {
      return res.status(404).json({ error: 'Product not found' })
    }
    return res.json(product)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router
