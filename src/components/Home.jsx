import React from 'react'
import HeroImage from '../images/heroImage.png.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div
    name='home'
    className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
    >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Software Engineer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I am Gospel Tigiri, a highly motivated and detail-oriented software engineer with a year experience in developing scalable and efficient solutions.
                </p>
                <div>
                    <Link 
                        to='portfolio' 
                        smooth 
                        duration={500} 
                        className=' group text-white w-fit px-6 py-3 my-2
                        flex items-center rounded-md bg-gradient-to-tr 
                        from-orange-500 to-orange-500 cursor-pointer'
                    >
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt='my profile' className='rounded-2xl mx-auto h-96 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home