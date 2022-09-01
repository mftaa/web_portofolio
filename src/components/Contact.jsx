import React from 'react'
import {
  FaTiktok,
  FaFacebook,
  FaInstagram,
  FaSpotify
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  
  return (
    <div name='contact' className='w-full h-72 bg-[#0a192f]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div className='text-4xl font-bold text-gray-300 '>Find me on :</div>
    <div className='flex flex-row justify-center'>
          <div className='w-[160px] h-[60px] flex justify-between place-items-center bg-transparent'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              link href="https://www.instagram.com/_miftachussurur/"
            >
               <FaInstagram size={30} />
            </a>
          </div>
          <div className='w-[160px] h-[60px] flex  justify-between items-center bg-transparent'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              link href="https://www.tiktok.com/@_miftachussurur"
            >
               <FaTiktok size={30} />
            </a>
          </div>
          <div className='w-[160px] h-[60px] flex justify-between items-center  bg-transparent'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              link href="mailto:miftachussurur1993@gmail.com"
            >
               <HiOutlineMail size={30} />
            </a>
          </div>
          <div className='w-[160px] h-[60px] flex justify-between items-center  bg-transparent'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              link href="https://www.facebook.com/miftachussurur.tata"
            >
               <FaFacebook size={30} />
            </a>
          </div>
          <div className='w-[160px] h-[60px] flex justify-between items-center  bg-transparent'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              link href="https://open.spotify.com/playlist/2oKklrPvCC6aZ8UyG1DNX7"
            >
               <FaSpotify size={30} />
            </a>
          </div>
        </div>
    </div>
    <div className='text-center bg-black text-gray-50'><p>Copyright © 2022||miftachussurur1993@gmail.com</p>
    </div>
    </div>

  )
}

export default Contact