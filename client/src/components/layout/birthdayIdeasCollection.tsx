import BirthdayIdeas from '@/components/reusable/birthdayIdeas'
import SampleImage from '../../../public/images/homePage/hero1.webp'

const BirtdayIdeasCollection = () => {
  return (
    <div className='mt-4 flex flex-col space-y-4 p-4'>
      <div className='flex flex-col items-center justify-center py-4'>
        <h2 className='text-md font-semibold'>
          Find the perfect birthday gift
        </h2>
        <p className='text-sm'>Make their day with something unique</p>
      </div>
      <BirthdayIdeas image={SampleImage} />
    </div>
  )
}

export default BirtdayIdeasCollection
