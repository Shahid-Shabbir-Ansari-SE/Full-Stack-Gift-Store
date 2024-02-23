import React from 'react'
import HeroBanner from '@/components/specific/homePage/heroBanner'
import TopCard from '@/components/specific/homePage/topCard'
import MidBanner from '@/components/specific/homePage/midBanner'
import BottomBanner from '@/components/specific/homePage/bottomBanner'
import BusinessSection from '@/components/specific/homePage/businessSection'
import GiftSection from '@/components/specific/homePage/giftSection'
import MilestoneSection from '@/components/specific/homePage/milestoneSection'
import EpicGifts from '@/components/specific/homePage/epicGifts'

const page = () => {
  return (
    <div>
      <HeroBanner />
      <TopCard />
      <GiftSection />
      <MilestoneSection />
      <MidBanner />
      <EpicGifts />
      <BusinessSection />
      <BottomBanner />
    </div>
  )
}

export default page
