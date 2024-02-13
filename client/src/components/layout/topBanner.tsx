import Banner from "../reusable/banner";
import BannerImage from "../../../public/images/homePage/hero1.webp" 

const TopBanner = () => {
    return (
        <Banner 
          title='Wedding planning'
          description="'Tying the knot? We're here to take the stress out of wedding planning with tons of creative inspo from small UK businesses  think everything from Insta-worthy decs to bespoke favours"
          button="Shop Mother's day"
          image={BannerImage}
          mainDivStyle='flex-col-reverse bg-lightPink md:flex-row md:space-x-3'
          paraStyle=''
          buttonStyle='bg-darkPurple text-white'
        />
    )
}

export default TopBanner;