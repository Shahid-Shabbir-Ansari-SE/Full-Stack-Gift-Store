import Image from 'next/image'
import IntroCardProps from './types/introCardProps'

const IntroCard = ({
  cardImage,
  cardTitle,
  cardDescription,
  cardHyperlink
}: IntroCardProps) => {
  return (
    <div className='my-2 flex w-full flex-col items-start space-y-4 px-4 py-6 font-NotoRegular'>
      <Image
        src={cardImage}
        className='h-[250px] w-[60%] rounded-xl object-cover md:w-[100%]'
        height={0}
        width={0}
        alt='intro-card'
      />

      <h3 className='font-bold'>{cardTitle}</h3>
      <p className='w-[80%] opacity-90 md:w-[90%]'>{cardDescription}</p>
      <a href={cardHyperlink} className='text-sm font-bold underline'>
        Shop their collection
      </a>
    </div>
  )
}

export default IntroCard
