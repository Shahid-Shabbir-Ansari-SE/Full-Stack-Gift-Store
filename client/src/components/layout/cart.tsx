/* ------------ Packages Import ------------ */
'use client'
import React, { useEffect } from 'react'
import { useCart } from '@/hooks/fetchUserID'

/* --------------- Interfaces --------------- */
interface cartProps {}

/* ---------------- Component ---------------- */
const cart: React.FC<cartProps> = ({}) => {
  useCart()
  return (
    <div>
      <h1>Cart</h1>
    </div>
  )
}

export default cart
