/* ------------ Packages Import ------------ */
import React from 'react'
import Banner from '@/components/reusable/banner'

/* ---------------- Component ---------------- */
const heroBanner: React.FC = ({}) => {
  return (
    <div className='p-6 md:p-0'>
      <Banner
        mainDivStyle={
          'bg-basePink flex-col flex-col-reverse md:flex-row md:w-full col-span-2 lg:flex-row py-6 lg:py-0'
        }
        title='Find a special gift
made for Mum'
        description={`Psst... It's on Sunday 10th March.`}
        button="Shop Mother's Day"
        image='/images/homePage/heroBanner.jpg'
        headingsStyle={
          'mt-3 lg:mt-0 text-center text-lg items-center justify-center text-black'
        }
        paraStyle={'font-NotoRegular text-[20px]'}
        buttonStyle={
          'bg-darkPurple text-sm text-white px-[52px] py-[10px] font-NotoBold rounded-lg lg:mt-8'
        }
        secondDivStyle={'justify-end flex'}
        imageStyle={'top-6'}
      />
    </div>
  )
}

export default heroBanner
