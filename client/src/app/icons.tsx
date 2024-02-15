import { FaRegHeart } from 'react-icons/fa6'
import { IoBasket } from 'react-icons/io5'
import { FaFacebookF } from 'react-icons/fa6'
import { FaStar } from 'react-icons/fa6'
import { FaLocationDot } from 'react-icons/fa6'
import { FaChevronUp } from 'react-icons/fa6'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { RxGithubLogo } from 'react-icons/rx'
import { SiUpwork } from 'react-icons/si'
import { IoIosInformationCircle } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'
import { TbUserCircle } from 'react-icons/tb'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaBars } from 'react-icons/fa6'
import { BiExit } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import { IoMdStar } from 'react-icons/io'

const icons = {
  wishlist: FaRegHeart,
  user: TbUserCircle,
  basket: IoBasket,
  facebook: FaFacebookF,
  star: FaStar,
  location: FaLocationDot,
  arrowUp: FaChevronUp,
  arrowLeft: FaArrowLeftLong,
  twitter: FaTwitter,
  mail: IoMdMail,
  github: RxGithubLogo,
  upwork: SiUpwork,
  info: IoIosInformationCircle,
  search: IoSearch,
  delivery: TbTruckDelivery,
  bars: FaBars,
  cross: BiExit,
  close: RxCross2,
  starFilled: IoMdStar,
  iconNull: () => null,
}

export default icons
