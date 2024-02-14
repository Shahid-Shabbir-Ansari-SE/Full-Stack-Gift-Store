import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface cardProps {
  cardImageLink: StaticImageData
  cardLink: string
  cardTitle: string
  mainDivStyle: string
  imageStyle: string
}

const Card = ({
  cardImageLink,
  cardLink,
  cardTitle,
  mainDivStyle,
  imageStyle
}: cardProps) => {
  return (
    <Link href={cardLink}>
      <div
        className={`${mainDivStyle} flex w-[100%] rounded-xl bg-lightGrey font-NotoBold hover:ring-2 hover:ring-black`}
      >
        <div className='flex flex-[80%] items-center justify-center overflow-hidden'>
          <Image
            height={0}
            width={0}
            className={`h-full w-full ${imageStyle}`}
            src={cardImageLink}
            alt='card'
          />
        </div>
        <p className='flex-[20%] py-4 text-base'>{cardTitle}</p>
      </div>
    </Link>
  )
}

export default Card
