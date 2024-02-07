import React from 'react'

interface loadingCardProps {
  cardWidth: string
}

const loadingCard = ({ cardWidth }: loadingCardProps) => {
  return (
    <div className={`w-[${cardWidth}] animate-pulse`}>
      <div className='h-[212px] w-full rounded-md bg-[#616169]'></div>
      <div className='mt-4 h-6 w-full rounded-md bg-[#616169]'></div>
      <div className='mt-4 h-6 w-full rounded-md bg-[#616169]'></div>
      <div className='mt-4 h-6 w-1/3 rounded-md bg-[#616169]'></div>
    </div>
  )
}

export default loadingCard
