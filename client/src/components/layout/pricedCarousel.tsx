'use client'
import Carousel from '@/components/reusable/carousel'
import SampleCarouselItem from '@/components/reusable/sampleData/carouelItems'

const PricedCarousel = () => {
  return (
    <div className='mt-4 flex flex-col items-center text-base font-semibold '>
      <p className='my-4'>Popular Gifts</p>
      <Carousel items={SampleCarouselItem} carouselType='priced' />
    </div>
  )
}

export default PricedCarousel
