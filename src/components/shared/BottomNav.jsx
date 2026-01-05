import React, { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { MdOutlineReorder } from 'react-icons/md'
import { CiCircleMore } from 'react-icons/ci'
import { BiSolidDish } from "react-icons/bi"
import { useNavigate, useLocation } from 'react-router-dom'
import { MdTableBar } from "react-icons/md";
import Modal from './Modal'
import { useDispatch } from 'react-redux'
import { setCustomer } from '../../redux/slices/customerSlice';

const BottomNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guestCount, setGuestCount] = useState(0);

  const handleCreateOrder = () => {
    // if (!name.trim() || !phone.trim()) {
    //   alert('Please fill in customer name and phone number');
    //   return;
    // }
    
    dispatch(setCustomer({ name, phone, guests: guestCount }));
    // closeModal();
    navigate('/tables');
  }

  const increment = () => {
    if(guestCount >= 5) return;
    setGuestCount((prev) => prev + 1);
  };
  
  const decrement = () => {
    if(guestCount <= 0) return;
    setGuestCount((prev)=> prev - 1);
  };

  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const baseBtn = 'flex items-center justify-center w-[200px] rounded-[20px] transition-all'
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
        <MdTableBar className='mr-4' size={30}/>
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
      <button 
        onClick={openModal} 
        className='absolute bottom-10 bg-[#F6B100] text-[#f5f5f5] rounded-xl shadow-lg p-2'
      >
        <BiSolidDish size={60} />
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order" className="z-50">
        <div>
          <label className="block text-[#ababab] mb-2 text-sm font-medium">Customer Name</label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <input 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              type="text" 
              placeholder="Enter customer name" 
              className="bg-transparent flex-1 text-white focus:outline-none" 
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Phone Number</label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <input 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)}
              type="tel" // Changed from number to tel for phone numbers
              placeholder="Enter phone number" 
              className="bg-transparent flex-1 text-white focus:outline-none" 
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 mt-3 text-sm font-medium text-[#ababab]">Guest</label>
          <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg">
            <button 
              type="button"
              onClick={decrement} 
              className="text-yellow-500 text-2xl hover:text-yellow-400"
            >
              &minus;
            </button>
            <span className="text-white">{guestCount} Person{guestCount !== 1 ? 's' : ''}</span>
            <button 
              type="button"
              onClick={increment} 
              className="text-yellow-500 text-2xl hover:text-yellow-400"
            >
              &#43;
            </button>
          </div>
        </div>
    
        <button 
          onClick={handleCreateOrder} 
          className="w-full bg-[#F6B100] text-[#F5f5f5] rounded-lg py-3 mt-8 hover:bg-yellow-700 transition-colors"
        >
          Create Order
        </button>
      </Modal>
    </div>
  )
}

export default BottomNav