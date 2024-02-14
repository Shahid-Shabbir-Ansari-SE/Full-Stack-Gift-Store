import Image, { StaticImageData } from 'next/image'

interface BirthdayIdeasProps {
  image: StaticImageData
}

const BirthdayIdeas = ({ image }: BirthdayIdeasProps) => {
  return (
    <div className='flex flex-col space-y-4 rounded-xl bg-lightGrey px-8 py-4 lg:flex-row lg:space-x-4 lg:space-y-0'>
      <div className='mb-4 mt-[-25px] flex-[20%]'>
        <Image
          className='h-[50%] w-[50%] rounded-xl shadow-lg shadow-grey md:h-[75%] md:w-[75%] lg:w-full'
          src={image}
          height={0}
          width={0}
          alt='birthday-image'
        />
      </div>
      <div className='flex-[80%]'>
        <div className='flex justify-between border-y-2 border-solid border-baseGrey px-2 py-4'>
          <h4>Milestone Birthdays</h4>
          <p> &gt;</p>
        </div>
        <div className='flex justify-between border-b-2 border-solid border-baseGrey px-2 py-4'>
          <h4>Birthday gifts for kids</h4>
          <p> &gt;</p>
        </div>
        <div className='flex justify-between border-b-2 border-solid border-baseGrey px-2 py-4'>
          <h4>Birthdays by recipient</h4>
          <p> &gt;</p>
        </div>
        <div className='flex justify-between border-b-2 border-solid border-baseGrey px-2 py-4'>
          <h4>Birthday inspiration</h4>
          <p> &gt;</p>
        </div>
      </div>
    </div>
  )
}

export default BirthdayIdeas
