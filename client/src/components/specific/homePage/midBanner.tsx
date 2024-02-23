import React from 'react'
import Banner from '@/components/reusable/banner'

const midBanner = () => {
  return (
    <div className='m-6 rounded-lg bg-lightBlue pb-5'>
      <Banner
        title='Want 10% off everything for a *whole* year?'
        description="Join NOTHS & More – our exclusive membership – to get 10% off every time you shop, an extra bday discount, members-only competitions and tons of small biz inspiration"
        button='Find out more'
        image={'/images/homePage/midBanner.jpeg'}
        mainDivStyle=' md:flex-row-reverse md:gap-3 relative'
        paraStyle='text-sm font-NotoRegular'
        buttonStyle='text-sm absolute bottom-28 underline'
        headingsStyle='pl-24 pr-3 text-[28px] text-baseBlack pt-10 text-black'
        secondDivStyle='rounded-lg justify-end flex rotate-180'
        imageStyle='rotate-180'
      />
    </div>
  )
}

export default midBanner
