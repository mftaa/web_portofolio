import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import surur from '../assets/surur.jpg'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        
      <div className='flex place-items-center lg:right-10 lg:absolute '> <img className='w-60 h-60 lg:w-60 lg:h-60 flex rounded-full' src={surur} /></div>
        <p className='text-yellow-400'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>
          Miftachussurur
        </h1>
    
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Student
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I'm a student that Study Programmer and this is my simple portofolio, Hope you enjoy it!
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-400 hover:border-amber-600'>
            View Biodata
            
            <span className='group-hover duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default Home;