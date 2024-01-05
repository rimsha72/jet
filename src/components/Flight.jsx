import React from 'react';
import airport from "../assets/airport.png";
import airport2 from "../assets/airport2.png";
import calendar from "../assets/calendar.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaMinusCircle  } from "react-icons/fa";

const Flight = () => {
  return (
    <div className='w-full py-16 text-black px-4'>
      <div className='max-w-screen-2xl mx-auto'>
        <h1 className='text-5xl font-bold mb-4'>Plan a Flight</h1>
        <p className='text-gray-500 text-lg mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum, lacus non faucibus congue, lectus quam viverra nulla, quis egestas neque sapien ac magna.</p>
        <div className='bg-white py-6 px-8 rounded-xl border border-[#999]'>
          <form className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='flex flex-1 justify-between items-center px-4 border-r-[1px] border-[#686868]'>
              <div className='flex items-center gap-4'>
                <img src={airport} alt="plane" className='w-5 h-4' />
                <div>
                  <p className='text-xl text-[#686868]'>New York</p>
                  <p className='text-[#B1B1B1] text-sm'>Any Airport</p>
                </div>
              </div>
              <MdKeyboardArrowDown className='h-5 w-5' />
            </div>
            <div className='flex flex-1 justify-between items-center px-4 border-r-[1px] border-[#686868]'>
              <div className='flex items-center gap-4'>
                <img src={airport2} alt="plane" className='w-5 h-4' />
                <div>
                  <p className='text-xl text-[#686868]'>London</p>
                  <p className='text-[#B1B1B1] text-sm'>Any Airport</p>
                </div>
              </div>
              <MdKeyboardArrowDown className='h-5 w-5' />
              
              {/* <CiCircleMinus /> */}
            </div>
            <div className='flex flex-1 justify-between items-center px-4 border-r-[1px] border-[#686868]'>
              <div className='flex items-center gap-4'>
                <img src={calendar} alt="plane" />
                <div>
                  <p className='text-xl text-[#686868]'>Date</p>
                </div>
              </div>
              <div>
                <p className='text-xl text-[#686868] text-right'>15 Nov</p>
                <p className='text-[#B1B1B1] text-sm'>Any time London</p>
              </div>
            </div>
            <div className='flex flex-1' >
              <div class="py-2 px-3 inline-block" data-hs-input-number>
                <div class="flex items-center">
                  <button type="button" class="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-[#686868] bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-input-number-decrement>
                  <FaMinusCircle/>
                  </button>
                  <input class="p-0 border-0 text-xl text-[#686868] text-center" type="text" value="1 Passenger" data-hs-input-number-input />
                  <button type="button" class="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-[#686868] bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-input-number-increment>
                    <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

};

export default Flight;
