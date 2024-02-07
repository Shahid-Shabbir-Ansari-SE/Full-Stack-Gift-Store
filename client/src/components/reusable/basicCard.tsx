import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface BasicCardProps {
  cardStyle: string
  cardImage: string
  cardLink: string
  imageStyle: string
  cardTitle?: string
  cardPrice?: string
  titleStyle?: string
  priceStyle?: string
}

const BasicCard: React.FC<BasicCardProps> = ({
  cardStyle,
  cardImage,
  cardLink,
  imageStyle,
  cardTitle = '',
  cardPrice,
  titleStyle,
  priceStyle
}: BasicCardProps) => {
  return (
    <div>
      <Link className={cardStyle} href={cardLink}>
        <Image
          height={100}
          width={100}
          src={cardImage}
          alt={cardTitle}
          className={imageStyle}
        />
        <h1 className={titleStyle}>{cardTitle}</h1>
        <p className={priceStyle}>{cardPrice}</p>
      </Link>
    </div>
  )
}

export default BasicCard
