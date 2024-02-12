'use client'
/* ------------ Packages Import ------------ */
import React, { useEffect, useState } from 'react'
import { userLoginProps } from '@/types/user'
import SampleInput from '@/components/reusable/sampleInput'
import SampleButton from '@/components/reusable/sampleButton'
import Link from 'next/link'
import icons from '@/app/icons'
import { loginUser } from '@/utils/auth'

/* ---------------- Component ---------------- */
const loginForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emptyForm, setEmptyForm] = useState({
    email: false,
    password: false
  })

  const stylesProps = {
    mainDivStyle:
      'w-full ring-baseGrey hover:ring-black rounded-lg focus-within:ring-[2px] focus-within:ring-heading',
    inputStyle: 'w-full outline-none px-2 py-[9px] rounded-lg',
    inputLabelStyle: 'mr-full mt-5 w-full pb-2.5 text-sm font-semibold',
    iconStyle: 'h-4 w-4 text-[#D9253B]',
    infoLabelStyle:
      '-mb-3 mt-2 w-full flex items-center justify-start gap-1 text-xs text-[#D9253B]',
    nonEmptyDivStyle: 'ring-[1px] p-1 bg-white focus-within:ring-basePurple',
    nonEmptyInputStyle:
      'ring-[1px] bg-white ring-transparent focus-within:ring-basePurple',
    emptyDivStyle: 'ring-[0px] p-0',
    emptyInputStyle: 'ring-[1px] h-[48px] px-2 ring-[#D9253B] bg-[#F9C3CE]'
  }

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name === 'email') {
      setEmail(value)

      setEmptyForm((prevEmptyForm) => ({
        ...prevEmptyForm,
        email: value.trim() === ''
      }))
    } else if (name === 'password') {
      setPassword(value)

      setEmptyForm((prevEmptyForm) => ({
        ...prevEmptyForm,
        password: value.trim() === ''
      }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    switch (name) {
      case 'email':
        setEmptyForm((prevEmptyForm) => ({
          ...prevEmptyForm,
          email: e.target.value.length === 0
        }))
        break
      case 'password':
        setEmptyForm((prevEmptyForm) => ({
          ...prevEmptyForm,
          password: value.length === 0
        }))
        break
      default:
        break
    }
  }

  const handleLogin = () => {
    loginUser({ email, password })
  }


  return (
    <div className='mx-auto flex w-[496px] flex-col items-center rounded-lg border border-baseGrey px-6'>
      <h1 className='my-3 font-NotoBold text-lg text-darkPurple'>Sign in</h1>
      <div className='mb-3 flex gap-1'>
        <h1>Have an account?</h1>
        <Link href='/user/sign-in' className='text-lightPurple underline'>
          Sign in
        </Link>
      </div>
      <h1 className={stylesProps.inputLabelStyle}>Email address</h1>
      <SampleInput
        mainDivStyle={`${stylesProps.mainDivStyle}
        ${emptyForm.email ? stylesProps.emptyDivStyle : stylesProps.nonEmptyDivStyle}
        `}
        iconStyle=''
        inputStyle={`${stylesProps.inputStyle} ${
          emptyForm.email
            ? stylesProps.emptyInputStyle
            : stylesProps.nonEmptyInputStyle
        }`}
        placeHolder=''
        inputIcon='iconNull'
        handleFunction={handleInputs}
        onBlur={handleBlur}
        inputName='email'
        inputType='email'
      />
      {emptyForm.email && (
        <span className={stylesProps.infoLabelStyle}>
          <icons.info className={stylesProps.iconStyle} />
          Email is required
        </span>
      )}
      <h1 className={stylesProps.inputLabelStyle}>Password</h1>
      <span className='mr-full mb-5 w-full text-xs'>
        Must have one uppercase, one special character and one number
      </span>
      <SampleInput
        mainDivStyle={`${stylesProps.mainDivStyle}
        ${emptyForm.password ? stylesProps.emptyDivStyle : stylesProps.nonEmptyDivStyle}
        `}
        iconStyle=''
        inputStyle={`${stylesProps.inputStyle} ${
          emptyForm.password
            ? stylesProps.emptyInputStyle
            : stylesProps.nonEmptyInputStyle
        }`}
        placeHolder=''
        inputIcon='iconNull'
        handleFunction={handleInputs}
        onBlur={handleBlur}
        inputName='password'
        inputType='password'
      />
      {emptyForm.password && (
        <span className={stylesProps.infoLabelStyle}>
          <icons.info className={stylesProps.iconStyle} />
          Password is required
        </span>
      )}

      <SampleButton
        buttonStyle='w-full py-[10px] px-[52px] my-7 bg-lightPurple text-white rounded-lg py-3'
        buttonText='Register'
        buttonFunction={handleLogin}
      />
    </div>
  )
}

export default loginForm
