'use client'
import React, { useEffect, useState } from 'react'
import SampleInput from '@/components/reusable/sampleInput'
import SampleButton from '@/components/reusable/sampleButton'
import Link from 'next/link'
import icons from '@/app/icons'
import { registerUser } from '@/utils/auth'

const registerForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emptyFirstName, setEmptyFirstName] = useState(false)
  const [emptyLastName, setEmptyLastName] = useState(false)
  const [emptyEmail, setEmptyEmail] = useState(false)
  const [emptyPassword, setEmptyPassword] = useState(false)

  const handleEmptyInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    switch (e.target.name) {
      case 'firstName':
        setFirstName(inputValue)
        setEmptyFirstName(inputValue.length === 0)
        break
      case 'lastName':
        setLastName(inputValue)
        setEmptyLastName(inputValue.length === 0)
        break
      case 'email':
        setEmail(inputValue)
        setEmptyEmail(inputValue.length === 0)
        break
      case 'password':
        setPassword(inputValue)
        setEmptyPassword(inputValue.length === 0)
        break
      default:
        break
    }
  }

  useEffect(() => {}), [firstName, lastName, email]

  const handleBlur = (e: any) => {
    // Handle onBlur event (input loses focus)
    switch (e.target.name) {
      case 'firstName':
        setEmptyFirstName(e.target.value.length === 0)
        break
      case 'lastName':
        setEmptyLastName(e.target.value.length === 0)
        break
      case 'email':
        setEmptyEmail(e.target.value.length === 0)
        break
      case 'password':
        setEmptyPassword(e.target.value.length === 0)
        break
      default:
        break
    }
  }
  const handle1 = () => {
    registerUser({ firstName, lastName, email, password })
  }

  const mainDivStyle =
    'w-full ring-baseGrey hover:ring-black rounded-lg focus-within:ring-[2px] focus-within:ring-heading'
  const inputStyle = 'w-full outline-none px-2 py-[9px] rounded-lg'
  const inputLabelStyle = 'mr-full mt-5 w-full pb-2.5 text-sm font-semibold'
  const iconStyle = 'h-4 w-4 text-[#D9253B]'
  const infoLabelStyle =
    '-mb-3 mt-2 w-full flex items-center justify-start gap-1 text-xs text-[#D9253B]'
  const nonEmptyDivStyle =
    'ring-[1px] p-1 bg-white focus-within:ring-basePurple'
  const nonEmptyInputStyle =
    'ring-[1px] bg-white ring-transparent focus-within:ring-basePurple'
  const emptyDivStyle = 'ring-[0px] p-0'
  const emptyInputStyle = 'ring-[1px] h-[48px] px-2 ring-[#D9253B] bg-[#F9C3CE]'

  return (
    <div className='mx-auto flex w-[496px] flex-col items-center rounded-lg border border-baseGrey px-6'>
      <h1 className='my-5 font-NotoBold text-lg text-darkPurple'>Register</h1>
      <div className='mb-5 flex gap-1'>
        <h1>Have an account?</h1>
        <Link href='/user/sign-in' className='text-lightPurple underline'>
          Sign in
        </Link>
      </div>
      <h1 className='mr-full w-full pb-2.5 text-sm font-semibold'>
        First name
      </h1>
      <SampleInput
        mainDivStyle={`${mainDivStyle}
        ${emptyFirstName ? emptyDivStyle : nonEmptyDivStyle}
        `}
        iconStyle=''
        inputStyle={`${inputStyle} ${
          emptyFirstName ? emptyInputStyle : nonEmptyInputStyle
        }`}
        placeHolder=''
        inputIcon='iconNull'
        handleFunction={handleEmptyInput}
        onBlur={handleBlur}
        inputName='firstName'
        inputType='text'
      />
      {emptyFirstName && (
        <span className={infoLabelStyle}>
          <icons.info className={iconStyle} />
          First name is required
        </span>
      )}
      <h1 className={inputLabelStyle}>Last name</h1>
      <SampleInput
        mainDivStyle={`${mainDivStyle}
        ${emptyLastName ? emptyDivStyle : nonEmptyDivStyle}
        `}
        iconStyle=''
        inputStyle={`${inputStyle} ${
          emptyLastName ? emptyInputStyle : nonEmptyInputStyle
        }`}
        placeHolder=''
        inputIcon='iconNull'
        handleFunction={handleEmptyInput}
        onBlur={handleBlur}
        inputName='lastName'
        inputType='text'
      />
      {emptyLastName && (
        <span className={infoLabelStyle}>
          <icons.info className={iconStyle} />
          Last name is required
        </span>
      )}
      <h1 className={inputLabelStyle}>Email address</h1>

      <SampleInput
        mainDivStyle={`${mainDivStyle}
        ${emptyEmail ? emptyDivStyle : nonEmptyDivStyle}
        `}
        iconStyle=''
        inputStyle={`${inputStyle} ${
          emptyEmail ? emptyInputStyle : nonEmptyInputStyle
        }`}
        placeHolder=''
        inputIcon='iconNull'
        handleFunction={handleEmptyInput}
        onBlur={handleBlur}
        inputName='email'
        inputType='email'
      />
      {emptyEmail && (
        <span className={infoLabelStyle}>
          <icons.info className={iconStyle} />
          Email is required
        </span>
      )}
      <h1 className={inputLabelStyle}>Password</h1>
      <span className='mr-full mb-5 w-full text-xs'>
        Must have one uppercase, one special character and one number
      </span>
      <SampleInput
        mainDivStyle={`${mainDivStyle}
        ${emptyPassword ? emptyDivStyle : nonEmptyDivStyle}
        `}
        iconStyle=''
        inputStyle={`${inputStyle} ${
          emptyPassword ? emptyInputStyle : nonEmptyInputStyle
        }`}
        placeHolder=''
        inputIcon='iconNull'
        handleFunction={handleEmptyInput}
        onBlur={handleBlur}
        inputName='password'
        inputType='password'
      />
      {emptyPassword && (
        <span className={infoLabelStyle}>
          <icons.info className={iconStyle} />
          Password is required
        </span>
      )}
      <span className='font-heading mt-5 text-center text-sm'>
        By proceeding, you confirm your acceptance of our
        <span className='text-basePurple underline'> Shopper Terms</span> and
        <span className='text-basePurple underline'> Privacy Policy</span>
      </span>

      <SampleButton
        buttonStyle='w-full py-[10px] px-[52px] my-5 bg-lightPurple text-white rounded-lg py-3'
        buttonText='Register'
        buttonFunction={handle1}
      />
    </div>
  )
}

export default registerForm
