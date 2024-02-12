'use client'
import * as React from 'react'
import { useState } from 'react'
import Popover from '@mui/material/Popover'
import Button from '@mui/material/Button'
import icons from '@/app/icons'
import Link from 'next/link'

const navBarPopOver = (): any => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <Button
        className='flex flex-col items-center text-black'
        aria-describedby={id}
        onClick={handleClick}
        sx={{
          color: 'black',
          backgroundColor: 'transparent',
          fontSize: '12px',
          marginTop: '1px',
          marginRight: '-10px',
          textTransform: 'capitalize',
          '&:hover': {
            color: 'black',
            backgroundColor: 'transparent'
          }
        }}
      >
        <icons.user className='h-7 w-7' />
        <span className=''>My Accounts</span>
      </Button>
      <Popover
        className='-left-12'
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <div className='grid w-[234px] gap-3 px-6 py-5'>
          <h1>Returning customer?</h1>
          <Link className='w-full font-NotoBold text-basePurple' href='/'>
            Sign in
          </Link>
          <hr className='my-2' />
          <h1>New here?</h1>
          <Link className='w-full font-NotoBold text-basePurple' href='/'>
            Register
          </Link>
        </div>
      </Popover>
    </div>
  )
}

export default navBarPopOver
