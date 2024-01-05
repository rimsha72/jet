import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import main from "../assets/main.png"
const Hero = () => {
  const heroStyles = {
    backgroundImage: `url(${main})`,
    backgroundSize: 'cover',
  };

  return (
    <div style={heroStyles}>
      <div className='bg-black/30'>
        <div className='text-white max-w-screen-2xl mx-auto'>
          <div className='max-w-screen-md mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center lg:p-0 px-4'>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-2 mt-24 font-cormorant'>
              Private Charter with Global Coverage
            </h1>
            <div className='flex justify-center items-center'>
              <p className='sm:text-xl lg:text-xl text-base py-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum, lacus non faucibus congue, lectus quam viverra nulla, quis egestas neque sapien ac magna.
              </p>
              <div
                className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                strings={['BTB', 'BTC', 'SASS']}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </div>
            <div className='flex gap-4 justify-center'>
              <button className='bg-[#1da1f2] rounded-md h-14 my-6 px-6 lg:w-56 text-white'>Plan A Flight</button>
              <button className='border border-white rounded-md h-14 my-6 px-6 lg:w-56 text-white'>Memberships</button>
            </div>

          </div>
          <div className='lg:absolute flex items-center lg:flex-col justify-center lg:gap-0 gap-4 2xl:right-48 lg:right-0 top-1/2 transform -translate-y-1/2 space-y-4 pr-4'>
            <hr class="lg:h-32 lg:flex hidden w-[1px] bg-gray-100 border-0" />
            <div className='rounded-full p-1 border border-white'><FaFacebook className="text-white text-2xl cursor-pointer h-4 w-4" /></div>
            <div className='rounded-full p-1 border border-white'><FaInstagram className="text-white text-2xl cursor-pointer h-4 w-4" /></div>
            <div className='rounded-full p-1 border border-white'><FaTwitter className="text-white text-2xl cursor-pointer h-4 w-4" /></div>
            <div className='rounded-full p-1 border border-white'><FaYoutube className="text-white text-2xl cursor-pointer h-4 w-4" /></div>
            <hr class="h-32 lg:flex hidden w-[1px] bg-gray-100 border-0" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
