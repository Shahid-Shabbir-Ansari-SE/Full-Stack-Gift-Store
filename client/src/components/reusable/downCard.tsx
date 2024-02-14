import Card from './card'
import downCardProps from './types/downCardProps'

const DownCard = ({ cardImage, cardLink, cardTitle }: downCardProps) => {
  return (
    <Card
      cardImageLink={cardImage}
      cardLink={cardLink}
      cardTitle={cardTitle}
      imageStyle='rounded-b-xl'
      mainDivStyle={'flex-col-reverse justify-center items-center h-60'}
    />
  )
}

export default DownCard
