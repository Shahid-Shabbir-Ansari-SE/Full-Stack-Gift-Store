/* ------------ Packages Import ------------ */
import React from 'react'
import icons from '@/app/icons'
import Image from 'next/image'

/* --------------- Interfaces --------------- */
interface pageProps {}

const payementIcons = [
  '/images/payement/payment-amex.svg',
  '/images/payement/payment-mastercard.svg',
  '/images/payement/payment-visa.svg',
  '/images/payement/payment-pay-pal.svg',
  '/images/payement/payment-klarna.svg'
]

/* ---------------- Component ---------------- */
const page: React.FC<pageProps> = ({}) => {
  return (
    <div className='flex w-full justify-center py-5'>
      <div className='flex w-[960px] '>
        <div className='grid w-3/4 gap-5'>
          <div className='flex w-full items-center justify-between'>
            <span className='w-1/4 font-NotoBold text-lightPurple underline'>
              Continue Shopping
            </span>
            <div className='flex gap-5'>
              <button className='flex items-center gap-3 rounded-md border border-lightPurple px-5 py-2 font-NotoBold text-[14px] text-lightPurple hover:border-black hover:bg-lightBlue'>
                <icons.arrowLeft className='rotate-180' />
                Checkout as guest
              </button>
              <button className='flex items-center gap-3 rounded-md bg-lightPurple px-5 py-2 font-NotoBold text-[14px] text-white'>
                <icons.arrowLeft className='rotate-180' />
                Sign in to checkout
              </button>
            </div>
          </div>
          <div className='flex w-full justify-end gap-2'>
            {payementIcons.map((icon, index) => (
              <Image
                height={22}
                width={38}
                key={index}
                src={icon}
                alt='payement icon'
              />
            ))}
          </div>
          <div className='flex w-full justify-end gap-60 rounded-md border px-6 py-1 font-NotoBold text-[22px]'>
            <h1>Total</h1>
            <strong>$ 0.00</strong>
          </div>
          <h1 className='text-[20px] font-light'>Order Summary</h1>
          <div className='flex w-full justify-end rounded-md border p-5'>
            <div className='flex w-[40%] flex-col justify-end gap-4'>
              <div className='flex w-full justify-between'>
                <span>Shahid</span>
                <span>$ 400</span>
              </div>
              <div className='flex w-full justify-between'>
                <span>Estimated Delivery</span>
                <span>FREE</span>
              </div>
              <hr />
              <div className='flex w-full justify-between text-[20px]'>
                <strong>Total</strong>
                <strong>$ 400</strong>
              </div>
            </div>
          </div>
          <div className='rounded-md bg-lightBlue p-5 text-[14px]'>
            <p>
              By proceeding to checkout you confirm your acceptance of our{' '}
              <span className='cursor-pointer font-NotoBold text-lightPurple underline'>
                Shopper Terms
              </span>{' '}
              and{' '}
              <span className='cursor-pointer font-NotoBold text-lightPurple underline'>
                Privacy Policy.
              </span>
            </p>
          </div>
          <div className='flex w-full justify-end gap-5'>
            <button className='flex items-center gap-3 rounded-md border border-lightPurple px-5 py-2 font-NotoBold text-[14px] text-lightPurple hover:border-black hover:bg-lightBlue'>
              <icons.arrowLeft className='rotate-180' />
              Checkout as guest
            </button>
            <button className='flex items-center gap-3 rounded-md bg-lightPurple px-5 py-2 font-NotoBold text-[14px] text-white'>
              <icons.arrowLeft className='rotate-180' />
              Sign in to checkout
            </button>
          </div>
          <div className='flex w-full justify-end gap-2'>
            {payementIcons.map((icon, index) => (
              <Image
                height={22}
                width={38}
                key={index}
                src={icon}
                alt='payement icon'
              />
            ))}
          </div>
          <div className='flex w-full justify-end'>
            <button className='flex items-center gap-5 rounded-md border px-3 py-1'>
              Checkout with
              <Image
                height={22}
                width={115}
                className='-ml-11'
                src='/images/payement/paypal-logo.svg'
                alt='payement icon'
              />
            </button>
          </div>
        </div>
        <div>Shahid</div>
      </div>
    </div>
  )
}

export default page
