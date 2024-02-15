import FeaturedProducts from '@/components/reusable/featuredProducts'
import DownCard from '@/components/reusable/downCard'
import sampleFeaturedItems from '@/components/reusable/sampleData/featuredItems'

const TopFeaturedProducts = () => {
  return (
    <div className='mt-10 p-4'>
      <FeaturedProducts items={sampleFeaturedItems} CardComponent={DownCard} />
    </div>
  )
}

export default TopFeaturedProducts
