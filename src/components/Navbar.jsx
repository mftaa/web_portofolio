import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaTiktok,
  FaFacebook,
  FaInstagram,
  FaSpotify
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import { HiChat } from 'react-icons/hi';



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center z-50 px-4 bg-[#0a192f] '>
      
      <div >
        <Link to='home' smooth={true} duration={500}>
        <img src={Logo} alt='Logo' style={{ width: '100px' }} />
        </Link>
      </div>
      {/* menu */}
      <ul className='hidden md:flex text-white'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        {/* <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li> */}
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 bg-white'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-white '
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300 bg-red-700'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              link href="https://www.instagram.com/_miftachussurur/"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              link href="https://www.tiktok.com/@_miftachussurur"
            >
              Tiktok <FaTiktok size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              link href="mailto:miftachussurur1993@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300 bg-blue-800'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              link href="https://www.facebook.com/miftachussurur.tata"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300 bg-green-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              link href="https://open.spotify.com/playlist/2oKklrPvCC6aZ8UyG1DNX7"
            >
              My Playlist <FaSpotify size={30} />
            </a>
          </li>
          
        </ul>
      </div>
      {/* <div className='lg:flex fixed flex-col top-[85%] right-10 bg-transparent hover:scale-110 duration-300'><HiChat link href="https://wa.me/62895418600555" color='white' size={60}/></div> */}
      
    </div>
  );
};

export default Navbar;