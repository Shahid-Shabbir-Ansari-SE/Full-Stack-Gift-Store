import { useState } from 'react'
import crouselCardProps from './types/crouselCardProps'
import CrouselCard from './crouselCard'

interface CarouselProps {
  items: crouselCardProps[]
  slidesToShow?: number
}

const Carousel = ({ items, slidesToShow = 4 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = Math.ceil(items.length - slidesToShow + 1)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }

  return (
    <div className='relative flex flex-col px-4'>
      <div className='relative flex overflow-x-hidden'>
        <div className='flex gap-x-4 py-2'>
          {items
            .slice(currentIndex, currentIndex + slidesToShow)
            .map((item, index) => (
              <CrouselCard
                cardImage={item.cardImage}
                cardLink={item.cardLink}
                cardTitle={item.cardTitle}
                key={index}
              />
            ))}
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
