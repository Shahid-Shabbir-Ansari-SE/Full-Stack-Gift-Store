import React from 'react'
import icons from '@/app/icons'

const deliveryBadge = () => {
  return (
    <div className='text-baseBlack flex w-max items-center gap-2 rounded-lg bg-lightGrey p-1 font-NotoBold text-[0.875rem]'>
      <icons.delivery className='h-4 w-4' />
      <span>Free UK Delivery</span>
    </div>
  )
}

export default deliveryBadge
