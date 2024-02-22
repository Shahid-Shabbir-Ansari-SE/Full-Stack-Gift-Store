import { useEffect } from 'react'
import Cookies from 'js-cookie'
import { verifyToken } from '@/utils/auth'
import { userIDAtom } from '@/states/cartAtom'
import { useAtom } from 'jotai'

export const fetchUserID = async () => {
  const userToken = Cookies.get('token')
  if (userToken) {
    try {
      const data = await verifyToken(userToken)
      if (data.success) {
        const user = data.data.user
        return user.id
      } else {
        console.error('Token is invalid:', data.error)
      }
    } catch (error: any) {
      console.error('Error verifying token:', error.message)
    }
  }
}
