import React from 'react'
import icons from '@/app/icons'

interface SampleInputProps {
  placeHolder: string
  inputIcon: keyof typeof icons
  inputStyle: string
  mainDivStyle: string
  iconStyle: string
}

const SampleInput: React.FC<SampleInputProps> = ({
  placeHolder,
  inputIcon,
  inputStyle,
  mainDivStyle,
  iconStyle
}) => {
  const IconComponent = icons[inputIcon]

  return (
    <div className={mainDivStyle}>
      <input className={inputStyle} placeholder={placeHolder} type='text' />
      <button className={iconStyle}>{<IconComponent />}</button>
    </div>
  )
}

{/* <SampleInput
  placeHolder='Search out marketplace'
  inputIcon='search'
  mainDivStyle='flex items-center ring-1 w-max ring-black rounded-lg focus-within:ring-2 focus-within:ring-basePurple focus-within:text-white focus-within:bg-basePurple
        transition-all duration-300 ease-in-out focus-within:shadow-lg'
  inputStyle='focus-within:text-black outline-none h-full bg-white py-[9px] px-4 rounded-l-lg'
  iconStyle='py-1 px-2 text-lg'
/> */}

export default SampleInput
