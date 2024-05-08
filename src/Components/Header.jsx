import React from 'react'
import { IoMdLogOut } from "react-icons/io";
// import MenuItem from './MenuItem';

function Header() {
  return (
    <div>
      <header>
        <nav className='flex flex-row justify-center items-center space-x-3 absolute right-[35px] top-[20px]'>
            <p className='text-white text-[18px] font-thin italic'>Welcome,</p>
            <p className='text-white text-[18px] font-bold'>Almat Farms</p>            
         <button className='flex flex-row items-center justify-center text-white space-x-2'>
            <IoMdLogOut size={22}/>
            <p className='text-white text-[20px] cursor-pointer'>Sign Out</p>
         </button>
        </nav>
      </header>
    </div>
  )
}

export default Header
