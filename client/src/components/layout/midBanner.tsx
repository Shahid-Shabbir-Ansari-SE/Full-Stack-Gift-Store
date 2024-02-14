import Banner from '../reusable/banner'
import BannerImage from '../../../public/images/homePage/hero1.webp'

const MidBanner = () => {
  return (
    <div className='p-4 md:p-0'>
      <Banner
        title='Want 10% off everything for a *whole* year?'
        description="'Join NOTHS & More – our exclusive membership – to get 10% off every time you shop, an extra bday discount, members-only competitions and tons of small biz inspiration"
        button='Find out more'
        image={BannerImage}
        mainDivStyle='flex-col-reverse bg-baseGrey md:flex-row-reverse  md:gap-3 text-sm'
        paraStyle='text-sm'
        buttonStyle='bg-darkPurple text-white'
      />
    </div>
  )
}

export default MidBanner
