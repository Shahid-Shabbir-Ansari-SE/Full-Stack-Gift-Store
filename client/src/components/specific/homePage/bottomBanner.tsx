import React from 'react'
import Banner from '@/components/reusable/banner'

const midBanner = () => {
  return (
    <div className='m-6 rounded-lg bg-[#F2879D] pb-5'>
      <Banner
        title={`Treats you're *loving*`}
        description='From handmade slippers to aromatherapy candles and personalised scarves, meet the pieces being snapped up on our marketplace.'
        button='Find out more'
        image={'/images/homePage/bottomBanner.jpg'}
        mainDivStyle=' md:flex-row-reverse md:gap-3 relative'
        paraStyle='text-sm font-NotoRegular'
        buttonStyle='text-sm absolute bottom-36 underline'
        headingsStyle='pl-24 pr-3 text-[28px] text-baseBlack pt-10 text-black'
        secondDivStyle='rounded-lg justify-end flex rotate-180'
        imageStyle='rotate-180'
      />
    </div>
  )
}

export default midBanner
