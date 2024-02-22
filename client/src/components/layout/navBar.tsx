'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import SampleInput from '../reusable/sampleInput'
import Link from 'next/link'
import icons from '@/app/icons'
import NavBarPopOver from '../specific/navBarPopOver'
import { useAtom } from 'jotai'
import { cartTotalItemsAtom } from '@/states/cartAtom'

const navBar = () => {
  const [cartTotalItems] = useAtom(cartTotalItemsAtom)

  return (
    <div className='flex h-[80px] items-center justify-center px-6 pb-3 pt-4'>
      <div className='w-1/4'>
        <Link href='/'>
          <Image
            src='/images/logo.svg'
            className='h-[40px] w-[157px]'
            alt='logo'
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div className='flex w-1/2 items-center justify-center'>
        <SampleInput
          placeHolder='Search out marketplace'
          inputIcon='search'
          mainDivStyle='flex items-center ring-1 w-[388px] ring-black rounded-lg focus-within:ring-2 focus-within:ring-basePurple text-[#63636B] focus-within:text-white focus-within:bg-basePurple transition-all duration-300 ease-in-out focus-within:shadow-lg'
          inputStyle='focus-within:text-black w-[348px] outline-none h-full bg-white py-[11px] px-4 rounded-l-lg'
          iconStyle='py-1 px-2 text-lg w-5'
        />
      </div>
      <div className='flex w-1/4 items-center justify-end gap-7'>
        {/* <button className='flex flex-col items-center'> */}
        {/* <icons.user className='h-7 w-7' /> */}
        {/* <span className='text-xs'>My Accounts</span> */}
        <NavBarPopOver />
        {/* </button> */}
        <Link href='#' className='flex flex-col items-center'>
          <icons.wishlist className='h-7 w-7' />
          <span className='text-xs'>Favourites</span>
        </Link>
        <Link href='/cart' className='relative flex flex-col items-center'>
          <icons.basket className='h-7 w-7' />
          <span className='absolute -top-1.5 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-lightPurple font-NotoBold text-xs text-white'>
            {cartTotalItems}
          </span>
          <h1 className='text-xs'>Basket</h1>
        </Link>
      </div>
    </div>
  )
}

export default navBar
