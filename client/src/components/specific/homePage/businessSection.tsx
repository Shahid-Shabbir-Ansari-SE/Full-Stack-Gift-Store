import React from 'react'
import Image from 'next/image'

const businessSection = () => {
  return (
    <div className='gap-5 text-center'>
      <h1 className='font-NotoBold text-[20px]'>Small business magic</h1>
      <p>
        Our marketplace champions over 5,000 small businesses – including these
        ones…
      </p>
      <div className='mb-11 mt-11 grid grid-cols-2 gap-5 bg-lightGrey px-6 pb-11'>
        <div className='flex flex-col items-start gap-5 text-left'>
          <Image
            src='/images/homePage/Minetta-Jewellery.jpg'
            width={308}
            height={308}
            className='-mt-6 rounded-lg'
            alt='businessSection1'
          />
          <h1 className='font-NotoBold text-[20px]'>
            Sarah of Minetta Jewellery
          </h1>
          <p>{`Looking for jewellery Mum will treasure? Enter Sarah and her handmade pieces, from a necklace personalised with your handwriting to a charm bracelet with all the family's initials. How special.`}</p>
          <button className='font-NotoBold underline'>
            Shop their collection
          </button>
        </div>

        <div className='flex flex-col items-start gap-5 text-left'>
          <Image
            src='/images/homePage/Gift-Love.jpg'
            width={308}
            height={308}
            className='-mt-6 rounded-lg'
            alt='businessSection1'
          />
          <h1 className='font-NotoBold text-[20px]'>
            Emily and Tony of Create Gift Love
          </h1>
          <p>{`Emily and Tony create personalised keepsakes for all life's special moments. The really great bit? Everything's made by hand and they only use sustainably sourced wood and leather, too.`}</p>
          <button className='font-NotoBold underline'>
            Shop their collection
          </button>
        </div>
      </div>
    </div>
  )
}

export default businessSection
