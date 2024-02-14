import { FaFacebook } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa6'
import { FaPinterest } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import BottomBar from './bottomBar'

const Footer = () => {
  return (
    <>
      <div className='flex flex-col bg-lightGrey px-4 py-8 md:flex-row md:items-center md:justify-around'>
        <div className='flex flex-col items-center justify-center space-y-4 border-b border-solid border-baseGrey py-4 md:border-none'>
          <h6 className='text-md font-base'>Get the app</h6>
          <h5 className='text-center'>Discover the easiest way to shop</h5>
          <button className='rounded-lg border border-solid border-grey px-2 py-1'>
            Learn more
          </button>
        </div>
        <div className='flex flex-col items-center justify-center space-y-4 border-b border-solid border-baseGrey py-4 md:border-none '>
          <h6 className='text-md font-base'>Get social</h6>
          <h5 className='text-center'>Follow us for epic gifts and inspo</h5>
          <div className='flex space-x-4 text-lg'>
            <a href='#'>
              <FaFacebook />
            </a>
            <a href='#'>
              <FaTwitter />
            </a>
            <a href='#'>
              <FaPinterest />
            </a>
            <a href='#'>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  )
}

export default Footer
