"use client";
import React from 'react'
import Image from 'next/image'
import SampleInput from '../reusable/sampleInput'
import Link from 'next/link'
import icons from '@/app/icons'
import NavBarPopOver from '../specific/navBarPopOver'
import Menu from './menu'


const navBar = () => {
  return (
    <div className='grid grid-cols-10 grid-rows-2 md:grid-rows-1 lg:grid-rows-2 w-full gap-y-2 pt-2'>
      <div className='col-start-1 col-end-3 pl-3 flex justify-start items-center md:col-end-2 lg:col-end-3'>
        <Link href='/'>
          <Image
            src='/images/logo.svg'
            alt='logo'
            width={0}
            height={0}
            className='w-32 h-20'
          />
        </Link>
      </div>
      <div className='md:flex md:justify-center md:items-center
                      col-start-1 col-end-11 row-start-2 px-4 mt-2 
                      md:row-start-1 md:col-start-3 md:col-end-7 lg:col-start-4 lg:col-end-8'>
        <SampleInput
          placeHolder='Search out marketplace'
          inputIcon='search'
          mainDivStyle='flex items-center ring-1 w-[100%] ring-black rounded-lg focus-within:ring-2 focus-within:ring-basePurple text-[#63636B] focus-within:text-white focus-within:bg-basePurple transition-all duration-300 ease-in-out focus-within:shadow-lg'
          inputStyle='focus-within:text-black w-[90%] outline-none h-full bg-white py-[11px] px-4 rounded-l-lg md:w-[85%] lg:w-[90%]'
          iconStyle='py-1 px-2 text-lg w-[10%] md:w-[15%] lg:w-[10%]'
        />
      </div>
      <div className='col-start-8 col-end-10 lg:col-end-11 flex items-center justify-center mr-2 w-auto space-x-4 lg:space-x-3'>
        <NavBarPopOver />
        <Link href='#' className='flex flex-col justify-center items-center'>
          <icons.wishlist className='h-7 w-7' />
          <span className='text-xs hidden lg:inline'>Favourites</span>
        </Link>
        <Link href='#' className='flex flex-col justify-center items-center'>
          <icons.basket className='h-7 w-7' />
          <h1 className='text-xs hidden lg:inline'>Basket</h1>
        </Link>
      </div>

      <Menu menuDivStyle='lg:row-start-2 lg:col-start-1 lg:col-end-11 w-screen'
            menuUlStyle='font-NotoBold
              lg:flex lg:justify-center  lg:items-center lg:space-x-4 lg:mt-4'
      />
    
    </div>
  )
}

export default navBar
