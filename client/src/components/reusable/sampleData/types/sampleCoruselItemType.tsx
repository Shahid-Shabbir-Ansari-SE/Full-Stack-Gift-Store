import { StaticImageData } from 'next/image'

interface SampleCarouselItemType {
  cardImage: StaticImageData
  cardLink: string
  cardTitle: string
  cardPrice: number
  discount: number
}

export default SampleCarouselItemType
