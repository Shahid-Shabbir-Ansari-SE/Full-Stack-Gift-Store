'use client'
import React from 'react'
import 'slick-carousel/slick/slick.css'
import Carousel from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import DownCard from '@/components/reusable/downCard'
import icons from '@/app/icons'

const milestoneSection = [
  {
    cardTitle: 'Gifts for 18th',
    cardImageLink: '/images/homePage/ageGifts/18gifts.jpg',
    cardLink: '#'
  },
  {
    cardTitle: 'Gifts for 21st',
    cardImageLink: '/images/homePage/ageGifts/21gifts.jpg',
    cardLink: '#'
  },
  {
    cardTitle: 'Gifts for 30th',
    cardImageLink: '/images/homePage/ageGifts/30gifts.jpg',
    cardLink: '#'
  },
  {
    cardTitle: 'Gifts for 40th',
    cardImageLink: '/images/homePage/ageGifts/40gifts.jpg',
    cardLink: '#'
  },
  {
    cardTitle: 'Gifts for 50th',
    cardImageLink: '/images/homePage/ageGifts/50gifts.jpg',
    cardLink: '#'
  },
  {
    cardTitle: 'Gifts for 60th',
    cardImageLink: '/images/homePage/ageGifts/60gifts.jpg',
    cardLink: '#'
  },
  {
    cardTitle: 'Gifts for 70th',
    cardImageLink: '/images/homePage/ageGifts/70gifts.jpg',
    cardLink: '/baby-gifts'
  },
  {
    cardTitle: 'Gifts for 80th',
    cardImageLink: '/images/homePage/ageGifts/80gifts.jpg',
    cardLink: '#'
  },
  {
    cardTitle: 'Gifts for 90th',
    cardImageLink: '/images/homePage/ageGifts/90gifts.jpg',
    cardLink: '#'
  }
]

const giftSection = () => {
  const NextArrow = (props: any) => {
    const { className, style, onClick } = props
    return (
      <div
        className='absolute -top-12 right-3 z-[1000] cursor-pointer'
        onClick={onClick}
      >
        <icons.arrowLeft className='rotate-180' />
      </div>
    )
  }

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props
    return (
      <div
        className='absolute -top-12 right-10 z-10 cursor-pointer'
        onClick={onClick}
      >
        <icons.arrowLeft />
      </div>
    )
  }

  const carouselSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  return (
    <div className='overflow-hidden px-6 pb-12'>
      <h1 className='pb-6 text-center font-NotoBold text-[20px]'>
        Milestone birthdays
      </h1>
      <Carousel className='outline-none' {...carouselSettings}>
        {milestoneSection.map((card, index) => (
          <DownCard
            key={index}
            cardTitle={card.cardTitle}
            cardImageLink={card.cardImageLink}
            cardLink={card.cardLink}
          />
        ))}
      </Carousel>
    </div>
  )
}

export default giftSection
