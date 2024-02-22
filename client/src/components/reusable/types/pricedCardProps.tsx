import { StaticImageData } from 'next/image'

interface PricedCardProps {
  cardImage: StaticImageData
  cardLink: string
  cardTitle: string
  mainDivStyle: string
  imageStyle: string
  itemPrice: number
  itemDiscount: number
}

export default PricedCardProps
