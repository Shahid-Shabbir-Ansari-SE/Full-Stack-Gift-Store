import QuickFilterItem from './quickFilterItem'

const QuickFilters = () => {
  return (
    <div className='flex w-full items-center space-x-2'>
      <p className='text-nowrap'>Quick Filters</p>
      <div className='flex space-x-2 overflow-x-auto pb-2'>
        <QuickFilterItem />
        <QuickFilterItem />
        <QuickFilterItem />
        <QuickFilterItem />
        <QuickFilterItem />
      </div>
    </div>
  )
}

export default QuickFilters
