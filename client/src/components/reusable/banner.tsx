import Image from 'next/image'
import React from 'react'

interface bannerProps {
  mainDivStyle: string
  title: string
  description: string
  button: string
  image: string
  headingsStyle: string
  buttonStyle: string
  paraStyle: string
  secondDivStyle: string
}

const banner: React.FC<bannerProps> = ({
  mainDivStyle,
  title,
  description,
  button,
  image,
  headingsStyle,
  buttonStyle,
  paraStyle,
  secondDivStyle
}) => {
  return (
    <div className={`px-6 ${mainDivStyle} row-span-2 flex w-full lg:h-[360px]`}>
      <div
        className={`flex w-full flex-col gap-3 font-NotoBold text-xl md:w-1/2 lg:w-1/2 ${headingsStyle}`}
      >
        <h1 className=''>
          {title.includes("Find original gifts they'll LOVE")
            ? title.split('gifts').map((text, index) => (
                <React.Fragment key={index}>
                  {`${index !== 0 ? 'gifts ' : ''}${text.trim()}`}
                  {index !== 1 && <br />}
                </React.Fragment>
              ))
            : title}
        </h1>
        <p className={paraStyle}>{description}</p>
        <button className={buttonStyle}>{button}</button>
      </div>
      <div className={`md:w-1/2 lg:relative lg:w-1/2 ${secondDivStyle}`}>
        <Image
          width={638}
          height={360}
          src={image}
          alt=''
          className='h-full w-full rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:absolute lg:top-6 lg:h-[380px] lg:object-cover'
        />
      </div>
    </div>
  )
}

{/* <Banner
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
/> */}

export default banner
