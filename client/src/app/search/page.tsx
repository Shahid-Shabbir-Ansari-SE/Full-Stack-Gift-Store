'use client'

import SearchedItem from './searchedItem'
import FilterSection from './filterSection'
import FilterMenu from './filterMenu'
import SearchedProducts from './searchedProducts'
import { useState } from 'react'

const SearchPage = () => {
  const [isMobileFilterMenuOpen, setIsFilterMobileMenuOpen] = useState(false)
  // const [productFilters, setProductFilters] = useState(['sample'])
  const toogleMobileFilterMenu = () => {
    const filterMenuMainDiv = document.getElementById('filterMenuMainDiv')
    if (!isMobileFilterMenuOpen) {
      filterMenuMainDiv?.classList.remove('hidden')
      filterMenuMainDiv?.classList.add('block', 'top-0', 'fixed')
    } else {
      filterMenuMainDiv?.classList.remove('block', 'top-0', 'fixed')
      filterMenuMainDiv?.classList.add('hidden')
    }
    setIsFilterMobileMenuOpen(!isMobileFilterMenuOpen)
  }
  return (
    <div className=''>
      <SearchedItem />
      <div className='border-solid border-grey p-4 py-4 lg:border-b'>
        <FilterSection toogleMobileFilterMenu={toogleMobileFilterMenu} />
      </div>
      <div className='flex space-x-2'>
        <div className='lg:flex-[30%]'>
          <FilterMenu toogleMobileFilterMenu={toogleMobileFilterMenu} />
        </div>
        <div className='p-4 lg:flex-[70%]'>
          <SearchedProducts />
        </div>
      </div>
    </div>
  )
}

export default SearchPage
