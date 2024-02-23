'use client'
import React from 'react'
import 'slick-carousel/slick/slick.css'
import Carousel from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import DownCard from '@/components/reusable/downCard'
import icons from '@/app/icons'

const downCardData = [
  {
    cardTitle: 'Gifts for her',
    cardImageLink: '/images/homePage/gifts/GiftsForHer.jpg',
    cardLink: '#'
  },
  {
    cardTitle: 'Gifts for him',
    cardImageLink: '/images/homePage/gifts/GiftsForMen.jpg',
    cardLink: '#'
  },
  {
    cardTitle: 'Gifts for kids',
    cardImageLink: '/images/homePage/gifts/GiftsForKids.jpg',
    cardLink: '#'
  },
  {
    cardTitle: 'Gifts for friends',
    cardImageLink: '/images/homePage/gifts/GiftsForFriends.jpg',
    cardLink: '#'
  },
  {
    cardTitle: 'Gifts for mum',
    cardImageLink: '/images/homePage/gifts/GiftsForMum.jpg',
    cardLink: '#'
  },
  {
    cardTitle: 'Gifts for dads',
    cardImageLink: '/images/homePage/gifts/GiftsForDads.jpg',
    cardLink: '#'
  },
  {
    cardTitle: 'Baby gifts',
    cardImageLink: '/images/homePage/gifts/GiftsForBaby.jpg',
    cardLink: '/baby-gifts'
  },
  {
    cardTitle: 'Gifts for any gender',
    cardImageLink: '/images/homePage/gifts/GiftsForGender.jpg',
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
        Gifts for everyone
      </h1>
      <Carousel className='outline-none' {...carouselSettings}>
        {downCardData.map((card, index) => (
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
