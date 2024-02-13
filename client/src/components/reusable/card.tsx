import React from 'react'
import Image, { StaticImageData }  from 'next/image'
import Link from 'next/link'

interface cardProps {
  cardImageLink: StaticImageData
  cardLink: string
  cardTitle: string
  mainDivStyle: string
}

const Card = ({ cardImageLink, cardLink, cardTitle, mainDivStyle }: cardProps) => {
  return (
      <Link href={cardLink}>
        <div className={`bg-lightGrey w-[100%] pt-2 rounded-xl font-NotoBold flex ${mainDivStyle}`}>
            <Image
              height={0}
              width={0}
              className='rounded-t-lg w-full h-full'
              src={cardImageLink}
              alt='card'
            />
            <p className='text-base py-4'>{cardTitle}</p>
        </div>
      </Link>
  )
}

export default Card
