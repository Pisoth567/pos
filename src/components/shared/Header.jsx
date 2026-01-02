import React from 'react';
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header className='flex justify-between items-center py-1 px-8 bg-[#1a1a1a]'>
        {/* logo */}
        <div className='flex items-center gap-2'>
            <img src={logo} className='h-20 w-20 my-shadow' alt="" />
            <h1 className='text-lg font-semibold text-[#f5f5f5]'>CoMi</h1>
        </div>

        {/* search */}
        <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2">
            <FaSearch className="text-[#f5f5f5]" />
            <input type="text" placeholder="Search" className="bg-transparent text-[#f5f5f5] outline-none" />
        </div>

        {/* Logged User Details*/}
        <div className='flex items-center gap-4'>
            <div className='bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer'>
                <FaBell className='text-[#f5f5f5] text-2xl'/>
            </div>
            <div className='flex items-center gap-3 cursor-pointer'>
                <FaUserCircle className='text-[#f5f5f5] text-3xl'/>
            </div>
            <div className='flex flex-col items-start'>
                <h1 className='text-md text-[#f5f5f5] font-semibold'>Pisoth</h1>
                <p className='text-xs text-[#ababab] font-medium'>Admin</p>
            </div>
        </div>
    </header>
  )
}

export default Header