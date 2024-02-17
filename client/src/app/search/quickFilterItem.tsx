'use client'

import { useState } from 'react'

const QuickFilterItem = () => {
  const [isActive, setIsActive] = useState(false)
  const handleFilterClick = (e: any) => {
    if (!isActive) {
      e.target.classList.add('bg-blue-500', 'text-white')
    } else {
      e.target.classList.remove('bg-blue-500', 'text-white')
    }
    setIsActive(!isActive)
  }
  return (
    <button
      className='flex cursor-pointer items-center space-x-2 rounded-xl border border-solid border-black px-3'
      onClick={handleFilterClick}
    >
      Filter1
    </button>
  )
}

export default QuickFilterItem
