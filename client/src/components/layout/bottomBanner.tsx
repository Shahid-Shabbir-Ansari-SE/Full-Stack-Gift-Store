import Banner from '../reusable/banner'
import BannerImage from '../../../public/images/homePage/hero1.webp'

const BottomBanner = () => {
  return (
    <div className='p-4 md:p-0'>
      <Banner
        title={`Treats you're *loving*Treats you're *loving*`}
        description='From handmade slippers to aromatherapy candles and personalised scarves, meet the pieces being snapped up on our marketplace.'
        button='Shop most wanted'
        image={BannerImage}
        mainDivStyle='flex-col-reverse bg-baseRed md:flex-row-reverse  md:gap-3 text-sm'
        paraStyle='text-sm'
        buttonStyle='bg-darkPurple text-white'
      />
    </div>
  )
}

export default BottomBanner
