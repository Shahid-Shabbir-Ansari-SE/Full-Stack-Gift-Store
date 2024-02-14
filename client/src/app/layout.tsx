import type { Metadata } from 'next'
import './globals.css'
import TopBar from '@/components/layout/topBar'
import NavBar from '@/components/layout/navBar'
import TopBanner from '@/components/layout/topBanner'
import TopFeaturedProducts from '@/components/layout/topFeatuedProducts'
import TopCarousel from '@/components/layout/topCarousel'
import MidCrousel from '@/components/layout/midCrousel'
import PricedCarousel from '@/components/layout/pricedCarousel'
import MidBanner from '@/components/layout/midBanner'
import BottomCrousel from '@/components/layout/bottomCarousel'
import IntroItemsCollection from '@/components/layout/introItemsCollection'
import BottomBanner from '@/components/layout/bottomBanner'
import BirtdayIdeasCollection from '@/components/layout/birthdayIdeasCollection'
import SampleImage from '../../public/images/homePage/hero1.webp'

export const metadata: Metadata = {
  title:
    'Online Gift Shop UK | Unique & Personalised Gifts | notonthehighstreet.com',
  description:
    'Discover thousands of unique finds at Not on The High Street. From gifts to homeware, they’re all made or sourced by the UK’s best small businesses.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='shortcut icon'
          href='/images/favicon.png'
          type='image/x-icon'
        />
      </head>
      <body className='font-NotoRegular'>
        <TopBar />
        <NavBar />
        <TopBanner />
        <TopFeaturedProducts />
        <TopCarousel />
        <MidCrousel />
        <PricedCarousel />
        <MidBanner />
        <BottomCrousel />
        <IntroItemsCollection />
        <BottomBanner />
        <BirtdayIdeasCollection />
        {children}
      </body>
    </html>
  )
}
