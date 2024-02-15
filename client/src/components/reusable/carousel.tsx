import React, { useState } from 'react'
import SampleCarouselItemType from './sampleData/types/sampleCoruselItemType'
import CrouselCard from './crouselCard'
import PricedCard from './pricedCard'

interface CarouselProps {
  items: SampleCarouselItemType[]
  slidesToShow?: number
  carouselType: 'simple' | 'priced'
}

const Carousel = ({
  items,
  slidesToShow = 4,
  carouselType = 'simple'
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = Math.ceil(items.length - slidesToShow + 1)

  const handlePrev = () => {
    if (currentIndex === 0) return
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }
  const handleNext = () => {
    if (currentIndex === totalSlides - 1) return
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }

  return (
    <div className='relative flex flex-col'>
      <div className='relative flex overflow-x-hidden'>
        <div className='flex gap-x-4 px-4 py-2'>
          {items
            .slice(currentIndex, currentIndex + slidesToShow)
            .map((item, index) =>
              carouselType === 'simple' ? (
                <CrouselCard
                  cardImage={item.cardImage}
                  cardLink={item.cardLink}
                  cardTitle={item.cardTitle}
                  key={index}
                />
              ) : (
                <PricedCard
                  cardImage={item.cardImage}
                  cardLink={item.cardLink}
                  cardTitle={item.cardTitle}
                  imageStyle=''
                  itemPrice={item.cardPrice ? item.cardPrice : 0}
                  mainDivStyle=''
                  itemDiscount={item.discount}
                  key={index}
                />
              )
            )}
        </div>
      </div>

      {/* Buutons */}
      <div
        className={`absolute left-0 top-[40%] flex h-[50px] w-[50px] items-center
                         justify-center rounded-full bg-lightGrey p-2 opacity-70 hover:opacity-100
                         ${currentIndex === 0 ? 'cursor-default' : 'cursor-pointer'} `}
        onClick={handlePrev}
      >
        <button className='text-base text-grey' disabled={currentIndex === 0}>
          &lt;
        </button>
      </div>

      <div
        className={`absolute right-0 top-[40%] flex h-[50px] w-[50px] items-center 
                        justify-center rounded-full bg-lightGrey p-2 opacity-70 hover:opacity-100
                        ${currentIndex === totalSlides - 1 ? 'cursor-default' : 'cursor-pointer'}`}
        onClick={handleNext}
      >
        <button
          className='text-base text-grey'
          disabled={currentIndex === totalSlides - 1}
        >
          &gt;
        </button>
      </div>
    </div>
  )
}

export default Carousel