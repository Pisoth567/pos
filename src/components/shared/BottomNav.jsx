import React from 'react'
import { FaHome } from 'react-icons/fa'
import { MdOutlineReorder } from 'react-icons/md'
import { CiCircleMore, CiViewTable } from 'react-icons/ci'
import { BiSolidDish } from "react-icons/bi"
import { useNavigate, useLocation } from 'react-router-dom'

const BottomNav = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const baseBtn =
    'flex items-center justify-center w-[200px] rounded-[20px] transition-all'

  const activeBtn = 'bg-[#343434] px-5 py-2 text-[#f5f5f5]'
  const inactiveBtn = 'text-[#ababab]'

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around'>

      <button
        onClick={() => navigate('/')}
        className={`${baseBtn} ${isActive('/') ? activeBtn : inactiveBtn}`}
      >
        <FaHome className='mr-4' size={30} />
        <p>Home</p>
      </button>

      <button
        onClick={() => navigate('/orders')}
        className={`${baseBtn} ${isActive('/orders') ? activeBtn : inactiveBtn}`}
      >
        <MdOutlineReorder className='mr-4' size={30} />
        <p>Orders</p>
      </button>

      <button
        onClick={() => navigate('/tables')}
        className={`${baseBtn} ${isActive('/tables') ? activeBtn : inactiveBtn}`}
      >
        <CiViewTable className='mr-4' size={30} />
        <p>Tables</p>
      </button>

      <button
        onClick={() => navigate('/more')}
        className={`${baseBtn} ${isActive('/more') ? activeBtn : inactiveBtn}`}
      >
        <CiCircleMore className='mr-4' size={30} />
        <p>More</p>
      </button>

      {/* Floating Dish Button */}
      <button className='absolute bottom-10 bg-[#F6B100] text-[#f5f5f5] rounded-xl shadow-lg'>
        <BiSolidDish size={60} />
      </button>

    </div>
  )
}

export default BottomNav
