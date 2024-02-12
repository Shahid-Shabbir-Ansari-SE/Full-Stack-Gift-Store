import axios from 'axios'
import {
  userRegisterProps,
  userLoginProps,
  verifyTokenProps
} from '@/types/user'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

export async function registerUser(props: userRegisterProps) {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, props, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return response.data
  } catch (error: any) {
    console.error('Error creating user:', error.message)
  }
}

export async function loginUser(props: userLoginProps) {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/sign-in`, props, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return response.data
  } catch (error: any) {
    console.error('Error logging in user:', error.message)
  }
}

export async function verifyToken(token: string): Promise<verifyTokenProps> {
  try {
    const response = await axios.get(`${API_BASE_URL}/verify-token`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    if (response.data) {
      return { success: true, data: response.data, error: '' }
    } else {
      return { success: false, error: 'Invalid response format' }
    }
  } catch (error: any) {
    console.error('Error verifying token:', error.message)
    return { success: false, error: 'Internal Server Error' }
  }
}
