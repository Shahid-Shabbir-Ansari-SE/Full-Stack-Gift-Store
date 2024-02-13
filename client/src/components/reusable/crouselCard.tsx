import Card from './card'
import crouselCardProps from './types/crouselCardProps'

const CrouselCard = ({ cardImage, cardLink, cardTitle }: crouselCardProps) => {
  return (
    <Card
      cardImageLink={cardImage}
      cardLink={cardLink}
      cardTitle={cardTitle}
      mainDivStyle={'flex-col items-center justify-between h-80'}
    />
  )
}

export default CrouselCard
