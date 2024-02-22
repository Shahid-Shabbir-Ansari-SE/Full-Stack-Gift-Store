import SampleItems from './sampleData/sampleItems'
import PricedCard from '@/components/reusable/pricedCard'

// interface SearchedProductsProps {
//   productFilters: string[]
// }

const SearchedProducts = () => {
  //
  //   function checkForTags(item: any) {
  //     let matchingFilter = []
  //     productFilters.map(
  //       (filter) => item.tags.includes(filter) && matchingFilter.push(filter)
  //     )
  //     // if there is no applied filters or more than one matched filter
  //     if (productFilters.length == 0 || matchingFilter.length > 0) {
  //       return (
  //         <PricedCard
  //           cardImage={item.productImage}
  //           cardLink='#'
  //           cardTitle={item.title}
  //           imageStyle=''
  //           itemDiscount={item.discount}
  //           itemPrice={item.price}
  //           mainDivStyle=''
  //         />
  //       )
  //     }
  //     return
  //   }

  return (
    <div className='flex flex-wrap justify-center space-x-4 space-y-2 py-2'>
      {SampleItems.map((item) => (
        <>
          <div className='w-[45%] md:w-[30%]'>
            {' '}
            <PricedCard
              cardImage={item.productImage}
              cardLink='#'
              cardTitle={item.title}
              imageStyle=''
              itemDiscount={item.discount}
              itemPrice={item.price}
              mainDivStyle=''
            />
          </div>
        </>
      ))}
    </div>
  )
}

export default SearchedProducts
