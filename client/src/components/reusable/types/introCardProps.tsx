import { StaticImageData } from 'next/image'

interface IntroCardProps {
  cardImage: StaticImageData
  cardTitle: string
  cardDescription: string
  cardHyperlink: string
}

export default IntroCardProps
