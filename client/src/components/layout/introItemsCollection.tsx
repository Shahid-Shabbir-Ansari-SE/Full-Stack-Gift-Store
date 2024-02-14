import SampleCarouselItem from '../reusable/sampleData/carouelItems'
import ItemsCollection from '../reusable/itemsCollection'

const IntroItemsCollection = () => {
  return (
    <div>
      <div className='flex flex-col items-start justify-center space-y-4 p-4 md:items-center'>
        <h2 className='font-bold'>Small business magic</h2>
        <p>
          Our marketplace champions over 5,000 small businesses – including
          these ones…
        </p>
      </div>
      <ItemsCollection
        introCardItems={SampleCarouselItem}
        pricedItems={SampleCarouselItem}
      />
    </div>
  )
}

export default IntroItemsCollection
