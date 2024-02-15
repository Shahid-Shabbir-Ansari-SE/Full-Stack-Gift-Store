import axios from 'axios'
import getProductProps from '@/types/product'


export async function addProduct(props: getProductProps) {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products/addProduct`, props, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return response.data
  } catch (error: any) {
    console.error('Error creating product:', error.message)
  }
}

export async function fetchAll() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/products/fetchAll`,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    return response.data
  } catch (error: any) {
    console.error('Error fetching products:', error.message)
  }
}

export async function fetchById(id: number) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/products/fetchById/${id}`,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    return response.data
  } catch (error: any) {
    console.error('Error fetching product:', error.message)
  }
}
