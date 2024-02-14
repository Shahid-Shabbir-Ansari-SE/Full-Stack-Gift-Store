import { Button } from '@mui/material'
import Link from 'next/link'
import icons from '@/app/icons'
import { useState } from 'react'
import MenuLink from './menuLink'

interface MenuProps {
  menuDivStyle: string
  menuUlStyle: string
}

const Menu = ({ menuDivStyle, menuUlStyle }: MenuProps) => {
  const [MenuOpen, setMenuOpen] = useState(false)
  const [windowCurrentWidth, setWindoCurrentwWidth] = useState(
    window.innerWidth
  )

  const handleToggleMenu = () => {
    const menuMainDiv = document.getElementById('menuMainDiv')
    const messegeDiv = document.getElementById('messegeDiv')

    if (!MenuOpen) {
      setMenuOpen(true)
      menuMainDiv?.classList.add(
        'absolute',
        'top-0',
        'left-0',
        'w-screen',
        'bg-white',
        'z-10',
        'flex',
        'flex-col'
      )
      messegeDiv?.classList.add(
        'flex',
        'w-screen',
        'justify-between',
        'items-center',
        'p-8',
        'shadow-4xl'
      )
    } else if (MenuOpen) {
      setMenuOpen(false)
      menuMainDiv?.classList.remove(
        'absolute',
        'top-0',
        'left-0',
        'w-screen',
        'bg-white',
        'z-10'
      )
      messegeDiv?.classList.remove(
        'flex',
        'w-screen',
        'justify-between',
        'items-center',
        'p-8',
        'shadow-4xl'
      )
    }
  }

  const handleWidthChange = () => {
    setWindoCurrentwWidth(window.innerWidth)
  }
  window.addEventListener('resize', handleWidthChange)
  return (
    <div
      id='menuMainDiv'
      className={`flex animate-[menuAnimation_0.8s_linear] items-center justify-center lg:block`}
    >
      <div id='messegeDiv' className='col-start-10'>
        <p id='shopMessage' className={`${MenuOpen ? 'block' : 'hidden'}`}>
          Shop by category
        </p>
        {windowCurrentWidth < 1024 && (
          <Button
            id='menuBarsButton'
            className='lg:hidden'
            onClick={handleToggleMenu}
            sx={{
              color: 'black',
              backgroundColor: 'transparent'
            }}
          >
            {MenuOpen ? (
              <icons.cross className='h-9 w-7' />
            ) : (
              <icons.bars className='h-9 w-7' />
            )}
          </Button>
        )}
      </div>

      <div
        id='downloadMessage'
        className={`${MenuOpen ? 'flex w-full items-center justify-center border-b-2  border-t-[1px] border-baseGrey bg-lightGrey py-5' : 'hidden'}`}
      >
        <Button className='rounded-xl bg-basePurple px-8 capitalize text-white'>
          Download our app
        </Button>
      </div>

      <div className={menuDivStyle}>
        <ul
          id='menuList'
          className={`${MenuOpen ? 'flex flex-col space-y-6 px-10 py-4' : 'hidden'} ${menuUlStyle}`}
        >
          <MenuLink linkHref='#' linkName="Valentine's Day" />
          <MenuLink linkHref='#' linkName='New in' />
          <MenuLink linkHref='#' linkName='Gifts' />
          <MenuLink linkHref='#' linkName='Birthdays' />
          <MenuLink linkHref='#' linkName='Cards' />
          <MenuLink linkHref='#' linkName='Jewellery' />
          <MenuLink linkHref='#' linkName='Home' />
          <MenuLink linkHref='#' linkName='Food & drink' />
          <MenuLink linkHref='#' linkName='Experiences' />
          <MenuLink linkHref='#' linkName='Lifestyle' />
          <MenuLink linkHref='#' linkName='Offers' />
        </ul>
      </div>
    </div>
  )
}

export default Menu
