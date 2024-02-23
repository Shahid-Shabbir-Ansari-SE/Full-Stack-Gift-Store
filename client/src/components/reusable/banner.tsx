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
  imageStyle?: string
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
  secondDivStyle,
  imageStyle
}) => {
  return (
    <div className={`px-6 ${mainDivStyle} row-span-2 flex w-full lg:h-[360px]`}>
      <div
        className={`flex w-full flex-col gap-3 font-NotoBold text-xl md:w-1/2 lg:w-1/2 ${headingsStyle}`}
      >
        <h1 className=''>
          {title.includes('Find a special gift made for Mum')
            ? title.split('made').map((text, index) => (
                <React.Fragment key={index}>
                  {`${index !== 0 ? 'made ' : ''}${text.trim()}`}
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
          className={`h-full w-full rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:absolute lg:h-[380px] lg:object-cover ${imageStyle}`}
        />
      </div>
    </div>
  )
}

export default banner
