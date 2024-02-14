import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Hero1 from '../../../public/images/homePage/hero1.webp'

interface bannerProps {
  mainDivStyle: string
  title: string
  description: string
  button: string
  image: StaticImageData
  buttonStyle: string
  paraStyle: string
}

const banner: React.FC<bannerProps> = ({
  mainDivStyle,
  title,
  description,
  button,
  image,
  buttonStyle,
  paraStyle
}) => {
  return (
    <div className={`flex p-6 ${mainDivStyle} w-full lg:h-[360px]`}>
      <div
        className={`mt-3 flex w-full flex-col items-center justify-center gap-3 font-NotoBold md:w-1/2 lg:w-1/2`}
      >
        <h2 className='text-md opacity-90 md:text-lg'>
          {title.includes("Find original gifts they'll LOVE")
            ? title.split('gifts').map((text, index) => (
                <React.Fragment key={index}>
                  {`${index !== 0 ? 'gifts ' : ''}${text.trim()}`}
                  {index !== 1 && <br />}
                </React.Fragment>
              ))
            : title}
        </h2>
        <p className={`${paraStyle} text-center font-NotoRegular`}>
          {description}
        </p>
        <button className={`${buttonStyle} rounded-md px-4 py-2`}>
          {button}
        </button>
      </div>
      <div className={`md:w-1/2 lg:relative`}>
        <Image
          width={638}
          height={360}
          src={image}
          alt=''
          className='h-full w-full rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:absolute lg:top-8 lg:object-cover'
        />
      </div>
    </div>
  )
}

{
  /* <Banner
  mainDivStyle={
    'bg-basePurple flex-col flex-col-reverse md:flex-row md:w-full col-span-2 lg:flex-row py-6 lg:py-0'
  }
  title="Find original gifts they'll LOVE"
  description='From trusted UK small businesses'
  button="Shop Valentine's"
  image='/images/homePage/hero1.webp'
  headingsStyle={
    'mt-3 lg:mt-0 text-center items-center justify-center text-white'
  }
  paraStyle={'text-base'}
  buttonStyle={
    'bg-darkPurple text-white px-[52px] py-[10px] text-base font-NotoBold rounded-lg lg:mt-8'
  }
  secondDivStyle={'justify-end flex'}
/> */
}

export default banner
