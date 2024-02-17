import icons from '../icons'
import SampleFilters from './sampleData/sampleFilters'
import FilterMenuItem from './filterMenuItem'

interface FilterMenuProps {
  toogleMobileFilterMenu?: () => void
}

const FilterMenu = ({ toogleMobileFilterMenu }: FilterMenuProps) => {
  return (
    <>
      <div
        className={`z-10 hidden h-full w-screen overflow-y-scroll bg-white transition-all lg:hidden`}
        id='filterMenuMainDiv'
      >
        <div className='flex h-[100px] w-full items-center space-x-4 bg-white px-4 py-8 shadow-lg'>
          <button onClick={toogleMobileFilterMenu}>
            <icons.close />
          </button>
          <p>Filters</p>
        </div>
        <div className='p-4'>
          {SampleFilters.map((filter) => {
            return (
              <div className='border-b border-solid border-baseGrey py-4'>
                <p className='text-lg'>{filter.filterTitle}</p>
                <div className='flex flex-col space-y-4 py-4'>
                  {filter.filterItems.map((item) => (
                    <FilterMenuItem
                      filterItemName={item}
                      hasCheckBox={filter.hasCheckBox}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        <div className='flex h-[100px] w-full flex-col items-center justify-center space-x-2 bg-white px-2 py-8 shadow-inner'>
          <button className='underline'>Reset All</button>
          <button
            className='w-screen rounded-lg bg-basePurple py-2 font-bold text-white'
            onClick={toogleMobileFilterMenu}
          >
            Close
          </button>
        </div>
      </div>

      {/* for lg breakpoint */}
      <div className='hidden lg:sticky lg:left-0 lg:top-0 lg:flex lg:h-screen lg:w-full lg:flex-col lg:overflow-y-scroll lg:px-10'>
        {SampleFilters.map((filter) => {
          return (
            <div className='border-b border-solid border-baseGrey py-4'>
              <p className='text-lg'>{filter.filterTitle}</p>
              <div className='flex flex-col space-y-4 py-4'>
                {filter.filterItems.map((item) => (
                  <FilterMenuItem
                    filterItemName={item}
                    hasCheckBox={filter.hasCheckBox}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default FilterMenu
