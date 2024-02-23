import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface upperCardProps {
  cardImageLink: string
  cardLink: string
  cardTitle: string
}

const upperCard = ({ cardImageLink, cardLink, cardTitle }: upperCardProps) => {
  return (
    <div className='cursor-pointer rounded-lg bg-lightGrey font-NotoBold hover:shadow-[0px_-2px_5px_0px_#00000024] lg:h-[288px] lg:w-[308px]'>
      <h1 className='flex h-[56px] items-center justify-center px-2'>
        {cardTitle}
      </h1>
      <Link href={cardLink}>
        <Image
          height={232}
          width={308}
          className='object-fit rounded-b-lg lg:h-[232px]'
          src={cardImageLink}
          alt='card'
        />
      </Link>
    </div>
  )
}

export default upperCard
