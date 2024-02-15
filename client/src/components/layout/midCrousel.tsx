'use client'
import Carousel from '@/components/reusable/carousel'
import SampleCarouselItem from '@/components/reusable/sampleData/carouelItems'

const MidCrousel = () => {
  return (
    <div className='mt-4 flex flex-col items-center text-base font-semibold'>
      <p className='my-4'>Milestone Birthdays</p>
      <Carousel items={SampleCarouselItem} carouselType='simple' />
    </div>
  )
}

export default MidCrousel
