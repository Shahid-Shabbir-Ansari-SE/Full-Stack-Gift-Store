import FeaturedProducts from '../reusable/featuredProducts'
import DownCard from '../reusable/downCard'
import sampleFeaturedItems from '../reusable/sampleData/featuredItems'

const TopFeaturedProducts = () => {
  return (
    <div className='mt-10 p-4'>
      <FeaturedProducts items={sampleFeaturedItems} CardComponent={DownCard} />
    </div>
  )
}

export default TopFeaturedProducts
