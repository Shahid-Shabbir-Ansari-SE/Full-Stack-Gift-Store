import IntroCard from './introCard'
import PricedCard from './pricedCard'
import SampleCarouselItemType from './sampleData/types/sampleCoruselItemType'

interface ItemsCollectionProps {
  introCardItems: SampleCarouselItemType[]
  pricedItems: SampleCarouselItemType[]
}

const ItemsCollection = ({
  introCardItems,
  pricedItems
}: ItemsCollectionProps) => {
  return (
    <div className='flex flex-col bg-lightGrey py-4 md:flex-row'>
      <div className='border-b-[1px] border-solid border-baseGrey'>
        <IntroCard
          cardImage={introCardItems[0].cardImage}
          cardTitle='Esi of Coy Biscuit'
          cardDescription='From portraits to personalised designs, Esi creates handmade vegan biscuits that are works of art. Her intricate biscuits celebrate body positivity and inclusivity so that *everyone* feels welcome.'
          cardHyperlink='#'
        />
      </div>

      <div>
        <IntroCard
          cardImage={introCardItems[1].cardImage}
          cardTitle='Sarah of Bloom Boutique'
          cardDescription={`Create jewellery they'll LOVE with Bloom Boutique – think personalised initial necklaces, birthstone bracelets and dainty heart hoops. That's their Valentine's prezzie sorted.`}
          cardHyperlink='#'
        />
        <div className='flex items-center justify-center space-x-4 px-4'>
          <PricedCard
            cardImage={pricedItems[0].cardImage}
            cardTitle='Sterling Silver Heart, Letter And Gemstone Necklace'
            imageStyle=''
            cardLink='#'
            mainDivStyle=''
            itemDiscount={pricedItems[0].discount}
            itemPrice={pricedItems[0].cardPrice}
          />

          <PricedCard
            cardImage={pricedItems[1].cardImage}
            cardTitle='Sterling Silver Heart, Letter And Gemstone Necklace'
            imageStyle=''
            cardLink='#'
            mainDivStyle=''
            itemDiscount={pricedItems[1].discount}
            itemPrice={pricedItems[1].cardPrice}
          />
        </div>
      </div>
    </div>
  )
}

export default ItemsCollection
