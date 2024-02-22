// cartAtom.ts
import { atom } from 'jotai'
import { Cart, CartProduct } from '@/types/cart'

export const cartAtom = atom<Cart[]>([])
export const cartTotalItemsAtom = atom(0)
export const cartProductsAtom = atom<CartProduct[]>([])
export const userIDAtom = atom<number | null>(null)
