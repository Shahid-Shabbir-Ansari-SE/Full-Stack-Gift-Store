import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PricedCardProps from './types/pricedCardProps'

const PricedCard = ({
  cardImage,
  cardLink,
  cardTitle,
  mainDivStyle,
  imageStyle,
  itemPrice,
  itemDiscount
}: PricedCardProps) => {
  return (
    <Link href={cardLink}>
      <div
        className={`relative flex  h-60 w-[100%] flex-col rounded-xl font-NotoRegular hover:ring-1 hover:ring-black`}
      >
        <div className='flex flex-[80%] items-center justify-center overflow-hidden'>
          <Image
            height={0}
            width={0}
            className={`h-full w-full rounded-xl`}
            src={cardImage}
            alt='pricedCard'
          />
        </div>

        <div className='flex-[20%] flex-col justify-center px-1 py-2 text-sm'>
          <p>{cardTitle}</p>
          {itemDiscount !== 0 ? (
            <p className='text-red'>
              ${itemPrice - itemPrice * (itemDiscount / 100)}
              <span className='ml-2 text-grey line-through'>{itemPrice}</span>
            </p>
          ) : (
            <p>${itemPrice}</p>
          )}
        </div>

        {itemDiscount !== 0 && (
          <p className='absolute left-0 top-[5%] bg-red p-1 text-sm text-white'>
            {itemDiscount}% off
          </p>
        )}
      </div>
    </Link>
  )
}

export default PricedCard
