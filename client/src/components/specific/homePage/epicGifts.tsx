'use client'
import React from 'react'
import 'slick-carousel/slick/slick.css'
import Carousel from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import DownCard from '@/components/reusable/downCard'
import icons from '@/app/icons'

const epicGifts = [
  {
    cardTitle: 'Best Birthday Gifts',
    cardImageLink: '/images/homePage/epicGifts/Bestbirthdaygifts.jpg',
    cardLink: '#'
  },
  {
    cardTitle: 'Engagement Gifts',
    cardImageLink: '/images/homePage/epicGifts/EngagementGifts.jpg',
    cardLink: '#'
  },
  {
    cardTitle: 'Best anniversary Gifts',
    cardImageLink: '/images/homePage/epicGifts/AniGifts.jpg',
    cardLink: '#'
  },
  {
    cardTitle: 'Best Wedding Gifts',
    cardImageLink: '/images/homePage/epicGifts/WedGifts.jpg',
    cardLink: '#'
  },
  {
    cardTitle: 'Thinking of you Gifts',
    cardImageLink: '/images/homePage/epicGifts/ThinkGifts.jpg',
    cardLink: '#'
  },
  {
    cardTitle: 'Just because Gifts',
    cardImageLink: '/images/homePage/epicGifts/JBGifts.jpg',
    cardLink: '#'
  },
  {
    cardTitle: 'New Job Gifts',
    cardImageLink: '/images/homePage/epicGifts/JobsGifts.jpg',
    cardLink: '#'
  },
  {
    cardTitle: 'Christening Gifts',
    cardImageLink: '/images/homePage/epicGifts/ChristerningGifts.jpg',
    cardLink: '#'
  },
  {
    cardTitle: 'New baby Gifts',
    cardImageLink: '/images/homePage/epicGifts/BabyGifts.jpg',
    cardLink: '/baby-gifts'
  },
  {
    cardTitle: 'Well done Gifts',
    cardImageLink: '/images/homePage/epicGifts/WellGifts.jpg',
    cardLink: '#'
  },
  {
    cardTitle: 'Thank you Gifts',
    cardImageLink: '/images/homePage/epicGifts/ThankGifts.jpg',
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
    <div className='overflow-hidden px-6 pb-16 pt-8'>
      <h1 className='pb-6 text-center font-NotoBold text-[20px]'>
        Milestone birthdays
      </h1>
      <Carousel className='outline-none' {...carouselSettings}>
        {epicGifts.map((card, index) => (
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
