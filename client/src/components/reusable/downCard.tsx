import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface downCardProps {
  cardImageLink: string
  cardLink: string
  cardTitle: string
}

const downCard = ({ cardImageLink, cardLink, cardTitle }: downCardProps) => {
  return (
    <div className='bg-lightGrey w-[271px] rounded-lg font-NotoBold'>
      <Link href={cardLink}>
        <Image
          height={271}
          width={271}
          className='rounded-t-lg'
          src={cardImageLink}
          alt='card'
        />
        <h1 className='h-[72px] px-4 pt-4'>{cardTitle}</h1>
      </Link>
    </div>
  )
}

export default downCard
