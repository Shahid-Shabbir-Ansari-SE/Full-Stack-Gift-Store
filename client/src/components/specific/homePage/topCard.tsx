import React from 'react'
import UpperCard from '@/components/reusable/upperCard'

const topCard = () => {
  return (
    <div className='flex w-full justify-center gap-5 pb-16 pt-20'>
      <UpperCard
        cardImageLink='/images/homePage/birthstone.jpg'
        cardLink='/'
        cardTitle='Gifts for Her'
      />
      <UpperCard
        cardImageLink='/images/homePage/Gardening-gifts.jpg'
        cardLink='/'
        cardTitle='Engagement Rings'
      />
      <UpperCard
        cardImageLink='/images/homePage/playful-pastel.jpg'
        cardLink='/'
        cardTitle='Engagement Rings'
      />
      <UpperCard
        cardImageLink='/images/homePage/rise.jpg'
        cardLink='/'
        cardTitle='Engagement Rings'
      />
    </div>
  )
}

export default topCard
