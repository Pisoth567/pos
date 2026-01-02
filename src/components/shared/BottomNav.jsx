import React from 'react'
import { FaHome } from 'react-icons/fa';
import { MdOutlineReorder} from 'react-icons/md';
import { CiCircleMore, CiViewTable} from 'react-icons/ci'
import { BiSolidDish } from "react-icons/bi";

const BottomNav = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around'>
        <button className='flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]'><FaHome className='inline mr-4' size={30}/><p>Home</p></button>
        <button className='flex items-center justify-center w-[200px] rounded-[20px] text-[#ababab]'><MdOutlineReorder  className='inline mr-4' size={30}/><p>Orders</p></button>
        <button className='flex items-center justify-center w-[200px] rounded-[20px] text-[#ababab]'><CiViewTable className='inline mr-4' size={30}/><p>Tables</p></button>
        <button className='flex items-center justify-center w-[200px] rounded-[20px] text-[#ababab]'><CiCircleMore className='inline mr-4' size={30}/><p>More</p></button>

        <button className='absolute bottom-10 bg-[#F6B100] text-[#f5f5f5] rounded-xl'>
            <BiSolidDish size={60} />
        </button>
    </div>
  )
}

export default BottomNav