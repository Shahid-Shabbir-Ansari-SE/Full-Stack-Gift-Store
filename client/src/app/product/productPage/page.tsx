/* eslint-disable @next/next/no-img-element */
/* ------------ Packages Import ------------ */
'use client'
import React from 'react'
import SampleButton from '@/components/reusable/sampleButton'
import icons from '@/app/icons'
import { fetchById } from '@/utils/product'
import { GetServerSideProps } from 'next'
import Loading from '@/components/reusable/loading'
import LoadingCard from '@/components/reusable/loadingCard'

/* --------------- Interfaces --------------- */
interface productPageProps {
  product: any
}

const globalCountriesAndCodes = [
  { name: 'United States', code: 'US' },
  { name: 'Canada', code: 'CA' },
  { name: 'Australia', code: 'AU' },
  { name: 'Germany', code: 'DE' },
  { name: 'France', code: 'FR' },
  { name: 'Italy', code: 'IT' },
  { name: 'Spain', code: 'ES' },
  { name: 'Japan', code: 'JP' },
  { name: 'China', code: 'CN' },
  { name: 'India', code: 'IN' },
  { name: 'Brazil', code: 'BR' },
  { name: 'Mexico', code: 'MX' },
  { name: 'South Korea', code: 'KR' },
  { name: 'Russia', code: 'RU' },
  { name: 'South Africa', code: 'ZA' },
  { name: 'Netherlands', code: 'NL' },
  { name: 'Sweden', code: 'SE' },
  { name: 'Singapore', code: 'SG' },
  { name: 'United Arab Emirates', code: 'AE' },
  { name: 'New Zealand', code: 'NZ' }
]

const ukCountriesAndCodes = [
  { name: 'Mainland UK', code: 'MAINLAND_UK' },
  { name: 'Highlands & Islands of Scotland', code: 'HIGHLANDS_ISLANDS' },
  { name: 'Northern Ireland', code: 'NORTHERN_IRELAND' },
  { name: 'Other UK Islands', code: 'OTHER_UK_ISLANDS' },
  { name: 'United Kingdom', code: 'UK' }
]

/* ---------------- Component ---------------- */
const productPage: React.FC<productPageProps> = ({}) => {
  const [product, setProduct] = React.useState<any>({})
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [quantity, setQuantity] = React.useState<number>(1)
  const [showMore, setShowMore] = React.useState<boolean>(false)

  React.useEffect(() => {
    const fetchProduct = async () => {
      const product = await fetchById(4)
      setProduct(product)
      setIsLoading(false)
      console.log('Product:', product)
    }
    fetchProduct()
  }, [])

  const totalReviews = product.reviews?.length || 0

  // Check if there are reviews before calculating the average rating
  const averageRating =
    totalReviews > 0
      ? product.reviews?.reduce(
          (sum: any, review: any) => sum + review.rating,
          0
        ) / totalReviews
      : 0

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const newQuantity = parseInt(value)
    if (value === '') {
      setQuantity(1)
    } else if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }
  const handleStockQuantity = () => {
    if (product.stock === 0) {
      console.log('quantity:', 'Out of stock')
      return <p className='text-red'>Out of Stock</p>
    } else if (quantity > product.stock) {
      console.log('quantity:', 'Less than stock quantity')
      return <p className='text-red'>Only {product.stock} in stock</p>
    }
  }

  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <div className='mx-32 '>
      <div className='flex gap-6'>
        <div className='flex flex-grow flex-col'>
          {isLoading ? (
            <div className='flex flex-grow animate-pulse items-center justify-center bg-gray-300'>
              <Loading color='inherit' />
            </div>
          ) : (
            <div className=''>
              {product.productImages?.map((image: any, index: number) => (
                <img key={index} src={image} alt='product' />
              ))}
            </div>
          )}
        </div>
        <div className='flex max-w-[308px] flex-col gap-3'>
          <h1 className='text-basePurple underline'>
            {isLoading ? (
              <div className='h-5 w-full animate-pulse rounded-lg bg-gray-300'></div>
            ) : (
              product.seller.name
            )}
          </h1>
          <h1 className='text-xl leading-10'>
            {isLoading ? (
              <div className='h-40 w-full animate-pulse rounded-lg bg-gray-300'></div>
            ) : (
              product.name
            )}
          </h1>
          <strong className='text-[20px]'>
            {isLoading ? (
              <div className='h-7 w-20 animate-pulse rounded-lg bg-gray-300'></div>
            ) : (
              `£${product.regularPrice}`
            )}
          </strong>
          {isLoading ? (
            <div className='h-5 w-[150px] animate-pulse rounded-lg bg-gray-300'></div>
          ) : (
            <div className='flex items-center font-NotoBold'>
              {Array.from({ length: Math.round(averageRating) }, (_, index) => (
                <icons.starFilled key={index} className='text-yellow' />
              ))}
              <p className='mx-2 text-sm'>
                {totalReviews > 0 ? `(${totalReviews})` : `No reviews`}
              </p>
            </div>
          )}
          {isLoading ? (
            <div className='h-[120px] w-full animate-pulse rounded-lg bg-gray-300'></div>
          ) : (
            <p className='font-NotoBold'>
              {`LAST MINUTE GIFTS - e-vouchers! The coolest cinema we know at
            Shoreditch's specialist liquor store and cocktail bar. 2 x Cocktails
            included per person.`}
            </p>
          )}

          <div className='flex justify-between font-NotoBold'>
            <p className='flex-grow'>Total</p>
            <div className=''>
              {isLoading ? (
                <div className='h-7 w-20 animate-pulse rounded-lg bg-gray-300'></div>
              ) : (
                <p>`£${product.regularPrice * quantity}`</p>
              )}
            </div>
          </div>
          <div className='flex w-full items-center justify-end gap-3'>
            <p>Quantity</p>
            <input
              type='number'
              min={0}
              onChange={handleQuantityChange}
              value={quantity}
              className='h-[44px] w-[44px] rounded-md border border-black p-2 text-center outline-none focus-within:border-2 focus-within:border-lightPurple'
              inputMode='numeric'
              style={{
                WebkitAppearance: 'none',
                MozAppearance: 'textfield',
                margin: 0
              }}
            />
          </div>
          {handleStockQuantity()}
          <div className='flex w-full items-center gap-4'>
            <button className='flex h-[44px] w-[44px] items-center justify-center rounded-full border border-basePurple'>
              <icons.wishlist className='p-1 text-xl text-basePurple' />
            </button>
            <SampleButton
              buttonText='Add to basket'
              buttonStyle='bg-lightPurple my-3 text-white w-[248px] px-10 h-[44px] rounded-md'
              buttonClick={() => {
                return console.log('Button Clicked')
              }}
            />
          </div>
          <div className='flex flex-col gap-5 rounded-lg bg-lightBlue p-5'>
            <p className='font-NotoBold text-xs'>Estimated delivery to</p>
            <div className='flex flex-col gap-2'>
              <select
                className='rounded-lg border border-black py-[0.5625rem] outline-none focus-within:border-basePurple'
                name=''
                id=''
              >
                <optgroup label='United Kingdom'>
                  {ukCountriesAndCodes.map((country, index) => {
                    return (
                      <option key={index} value={country.code}>
                        {country.name}
                      </option>
                    )
                  })}
                </optgroup>
                <optgroup label='International'>
                  {globalCountriesAndCodes.map((country, index) => {
                    return (
                      <option key={index} value={country.code}>
                        {country.name}
                      </option>
                    )
                  })}
                </optgroup>
              </select>
              <div className='flex w-full items-center gap-1 text-xs'>
                <span>
                  <icons.info className='text-sm' />
                </span>
                <h1>Delivery to selected countries only</h1>
              </div>
            </div>
            <hr className='my-5 border-t border-black' />
            <div className='flex flex-col gap-2'>
              <p className='text-xs'>Free Delivery</p>
              <div className='flex justify-between font-NotoBold'>
                <p>2 - 5 days from dispatch</p>
                <p>FREE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex gap-6 overflow-hidden py-7 ${showMore ? 'max-h-full' : 'max-h-80'}`}
      >
        <div className='w-[633px]'>
          <strong className='text-[20px]'>Product Description</strong>
          <div>
            {isLoading ? (
              <div className='flex h-60 animate-pulse items-center justify-center rounded-lg bg-gray-300'>
                <Loading color='inherit' />
              </div>
            ) : (
              <p className='mt-2.5'>{product.description}</p>
            )}
          </div>
        </div>
        <div className='grid w-[308px] gap-5'>
          <div>
            <strong>Dimensions :</strong>
            {isLoading ? (
              <div className='h-10 w-full animate-pulse rounded-lg bg-gray-300'></div>
            ) : (
              <div>
                <p>
                  <strong className='mx-1'>Height x Width:</strong>
                  {product.dimensions?.height} x {product.dimensions?.width}
                </p>
                <p>
                  <strong className='mx-1'>Weight:</strong>
                  {product.dimensions?.weight}g
                </p>
              </div>
            )}
          </div>
          <strong>GET IN TOUCH</strong>
          <p>
            To ask a question or find out more about this experience, get in
            touch with the seller directly via the ‘ask seller a question’
            button above.
          </p>
          <strong>VALIDITY PERIOD</strong>
          <p>
            Vouchers must be redeemed within 6 months and booked on a date
            within 12 months
          </p>
          <div>
            <strong>Made from</strong>
            {isLoading ? (
              <div className='h-10 w-full animate-pulse rounded-lg bg-gray-300'></div>
            ) : (
              product.material.map((material: string, index: number) => (
                <p key={index}>{material}</p>
              ))
            )}
          </div>
          <strong>TERMS & CONDITIONS</strong>
          <p>
            {`General notonthehighstreet.com shopper terms and conditions apply.
            Bookings are made subject to availability; for best availability, we
            advise booking within 28 days of your order being accepted to get
            the dates you want. For refunds, a 28-day cancellation period
            applies.`}
          </p>
          <p>
            {`If you wish to reschedule your booking, the seller requires
            at least 14 days' notice. The seller reserves the right to
            reschedule dates or alter venues due to unforeseen circumstances (eg
            teacher illness), or if fewer than the minimum required number of
            places are booked for an individual session.`}
          </p>
          <p>
            <strong>Product Code: </strong>
            {product.id}
          </p>
        </div>
      </div>
      <div className='flex w-full items-center justify-center'>
        <div className='h-0 w-[40%] border-t'></div>
        <button
          className='flex h-[2.25rem] w-[11.3125rem] items-center justify-center gap-2 rounded-md border border-lightPurple font-NotoBold text-lightPurple'
          onClick={handleShowMore}
        >
          <icons.arrowUp
            className={`${showMore ? '' : 'rotate-180'} text-xs`}
          />
          <p>SHOW {showMore ? 'LESS' : 'MORE'}</p>
        </button>
        <div className='h-0 w-[40%] border-t'></div>
      </div>
    </div>
  )
}

export default productPage
