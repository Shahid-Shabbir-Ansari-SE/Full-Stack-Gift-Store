import Card from './card'
import upCardProps from './types/upCardProps'

const UpCard = ({ cardImage, cardLink, cardTitle }: upCardProps) => {
  return (
    <Card
      cardImageLink={cardImage}
      cardLink={cardLink}
      cardTitle={cardTitle}
      imageStyle='rounded-t-xl'
      mainDivStyle={'flex-col items-center justify-between h-60'}
    />
  )
}

export default UpCard
