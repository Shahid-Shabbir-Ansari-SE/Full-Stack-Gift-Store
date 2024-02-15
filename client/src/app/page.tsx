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
import GiftsForAll from '@/components/layout/giftsForAll'
import Subscription from '@/components/layout/subscription'


const HomePage = () => {
  return (
    <>
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
      <GiftsForAll />
      <Subscription />
    </>
  )
}

export default HomePage
