'use client'
import Carousel from '@/components/reusable/carousel'
import SampleCarouselItem from '@/components/reusable/sampleData/carouelItems'

const TopCarousel = () => {
  return (
    <div className='mt-4 flex flex-col items-center text-base font-semibold '>
      <p className='my-4'>Gifts for everyone</p>
      <Carousel items={SampleCarouselItem} carouselType='simple' />
    </div>
  )
}

export default TopCarousel
