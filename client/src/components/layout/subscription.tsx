'use client'
import { useState } from 'react'

const Subscription = () => {
  const [email, setEmail] = useState('')
  const handleChange = (e: any) => {
    setEmail(e.target.value)
  }
  return (
    <div className='bg-lightCoral flex flex-col items-center justify-center space-y-4 px-2 py-8'>
      <h3 className='text-md font-bold'>Get first dibs</h3>
      <p className='font-medium'>
        Sign up for sales, discounts and small business stuff
      </p>
      <div className='flex w-[50%] flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
        <input
          className='w-full rounded-xl border border-solid border-baseGrey px-1 py-2 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-basePurple'
          type='text'
          placeholder='Enter your email address'
          value={email}
          onChange={handleChange}
        />
        <button className='rounded-xl bg-basePurple px-4 py-1 text-white'>
          Subscribe
        </button>
      </div>
      <p className='w-[50%] text-center text-xs md:w-[70%]'>
        See our{' '}
        <a href='#' className='underline'>
          privacy policy
        </a>{' '}
        to understand how we process your personal data to send you marketing
        emails
      </p>
    </div>
  )
}

export default Subscription
