import React from 'react'
import icons from '@/app/icons'
import Image from 'next/image'

const terms = [
  {
    title: 'Site map',
    link: '#'
  },
  {
    title: 'Anti-slavery statement',
    link: '#'
  },
  {
    title: 'Privacy and cookies',
    link: '#'
  },
  {
    title: 'Terms and conditions',
    link: '#'
  }
]

const FooterLinks = [
  {
    title: 'Shopping with us',
    subLinks: [
      {
        title: 'Returns and cancellations',
        link: '#'
      },
      {
        title: 'Gift cards',
        link: '#'
      },
      {
        title: 'Corporate gifts',
        link: '#'
      },
      {
        title: 'Discount and promo codes',
        link: '#'
      },
      {
        title: 'Customer reviews',
        link: '#'
      }
    ]
  },
  {
    title: 'Help',
    subLinks: [
      {
        title: 'Frequently asked questions',
        link: '#'
      },
      {
        title: 'Where’s my order?',
        link: '#'
      },
      {
        title: 'My Account',
        link: '#'
      },
      {
        title: 'Contact us',
        link: '#'
      },
      {
        title: 'Contact Seller',
        link: '#'
      }
    ]
  },
  {
    title: 'Useful stuff',
    subLinks: [
      {
        title: 'Who we are',
        link: '#'
      },
      {
        title: 'Press centre',
        link: '#'
      },
      {
        title: 'Careers',
        link: '#'
      }
    ]
  },
  {
    title: 'For sellers',
    subLinks: [
      {
        title: 'Why sell with us?',
        link: '#'
      },
      {
        title: 'Seller FAQs',
        link: '#'
      },
      {
        title: 'Apply to sell with us',
        link: '#'
      },
      {
        title: 'Seller terms and policies',
        link: '#'
      },
      {
        title: 'Seller privacy and cookies',
        link: '#'
      },
      {
        title: 'Become an affiliate',
        link: '#'
      }
    ]
  }
]

const payementIcons = [
  '/images/payement/payment-amex.svg',
  '/images/payement/payment-mastercard.svg',
  '/images/payement/payment-visa.svg',
  '/images/payement/payment-pay-pal.svg',
  '/images/payement/payment-klarna.svg'
]

const footer = () => {
  return (
    <>
      <div className='flex flex-col bg-lightGrey px-4 py-8 md:flex-row md:items-center md:justify-around'>
        <div className='flex flex-col items-center justify-center space-y-4 border-b border-solid border-baseGrey py-4 md:border-none'>
          <h6 className='font-NotoBold'>Get the app</h6>
          <h5 className='text-center'>Discover the easiest way to shop</h5>
          <button className='rounded-md border border-solid border-basePurple px-7 py-1.5 font-NotoBold text-darkPurple hover:bg-lightBlue'>
            Learn more
          </button>
        </div>
        <div className='flex flex-col items-center justify-center space-y-4 border-b border-solid border-baseGrey py-4 md:border-none '>
          <h6 className='font-NotoBold'>Get social</h6>
          <h5 className='text-center'>Follow us for epic gifts and inspo</h5>
          <div className='flex space-x-4 text-xl'>
            <a href='#'>
              <icons.facebook className='rounded-full bg-baseBlack p-[2px] py-0 text-white' />
            </a>
            <a href='#'>
              <icons.twitter />
            </a>
            <a href='#'>
              <icons.upwork />
            </a>
            <a href='#'>
              <icons.github />
            </a>
          </div>
        </div>
      </div>
      <div className='grid bg-lightGrey px-6 py-8'>
        <hr className='border-[#bbbbbe]' />
        <div>
          <div className='mt-4 grid grid-cols-4 gap-4'>
            {FooterLinks.map((link, index) => (
              <div key={index}>
                <h5 className='my-3 font-NotoBold text-[18px]'>{link.title}</h5>
                <div className='flex flex-col gap-3'>
                  {link.subLinks.map((subLink, index) => (
                    <a
                      key={index}
                      href={subLink.link}
                      className='text-baseBlack hover:text-basePurple hover:underline'
                    >
                      {subLink.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className='mt-8 border-[#bbbbbe]' />
        <div className='flex w-full justify-between pt-12'>
          <div className='flex items-center gap-1'>
            <p className='font-NotoBold'>Shopping in Country</p>
            <Image
              src='/images/GB.png'
              alt='UK'
              width={20}
              height={20}
              className='h-4 w-6'
            />
            <p>UK £ GBP </p>
            <a href='#' className='text-basePurple underline'>
              Change
            </a>
          </div>
          <div className='flex gap-4'>
            {payementIcons.map((icon, index) => (
              <Image
                height={32}
                width={50}
                src={icon}
                key={index}
                alt='payment'
              />
            ))}
          </div>
        </div>
      </div>
      <div className='grid gap-4 bg-baseBlack py-4'>
        <div className='flex w-full justify-center gap-5'>
          {terms.map((term, index) => (
            <a
              key={index}
              href={term.link}
              className='font-base text-[14px] text-white underline hover:text-lightGrey'
            >
              {term.title}
            </a>
          ))}
        </div>
        <div>
          <p className='text-center text-xs text-baseGrey'>
            Copyright © 2006-2024 Notonthehighstreet Enterprises Limited
          </p>
        </div>
      </div>
    </>
  )
}

export default footer
