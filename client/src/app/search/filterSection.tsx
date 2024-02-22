import icons from '../icons'
import QuickFilters from './quickFilters'
import FilterMenu from './filterMenu'

interface FilterSectionProps {
  toogleMobileFilterMenu?: () => void
}

const FilterSection = ({ toogleMobileFilterMenu }: FilterSectionProps) => {
  return (
    <>
      <div className='grid grid-cols-12 grid-rows-2 items-center lg:grid-rows-1'>
        <div className='col-start-1 col-end-4 row-start-1 text-xs font-extralight lg:col-start-11 lg:col-end-12'>
          <p>10 products</p>
        </div>
        <div className='col-start-10 col-end-12 row-start-1 flex items-center space-x-2 lg:col-start-2'>
          <div className='flex h-6 w-6 items-center justify-center rounded-[50%] bg-baseGrey px-2 py-1'>
            <span className='text-[10px]'>1</span>
          </div>
          <button
            className='flex items-center space-x-2'
            onClick={toogleMobileFilterMenu}
          >
            <p>Filters</p> <icons.filter className='lg:hidden' />
          </button>
        </div>
        <div className='col-start-7 col-end-9 row-start-1 text-nowrap md:col-start-8 md:col-end-10 lg:col-start-3'>
          <button>Reset All</button>
        </div>
        <div className='col-start-1 col-end-12 row-start-2 lg:hidden'>
          <QuickFilters />
        </div>
      </div>
    </>
  )
}

export default FilterSection
