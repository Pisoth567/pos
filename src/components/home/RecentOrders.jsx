import React from 'react'
import { FaSearch } from 'react-icons/fa'
import OrderList from './OrderList'
const RecentOrders = () => {
  return (
    <div className='px-8 mt-3'>
        <div className='bg-[#1a1a1a] w-full h-[530px] overflow-hidden rounded-lg'>
            <div className='flex justify-between items-center px-6 py-5'>
                <h1 className='text-[#f5f5f5] text-xl font-semibold tracking-wide'>
                    Recent Orders
                </h1>
                <a href="" className='text-[#025cca] text-md font-semibold'>View All</a>
            </div>
            <div style={{boxShadow: '0 0 2px white'}} className='flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-6 py-4 mx-6'>
                <FaSearch className='text-[#f5f5f5]'/>
                <input type="text" placeholder='Search Recent Order' className='bg-[#1f1f1f] outline-none text-[#f5f5f5] w-full' />
            </div>
            {/* Order list  */}
            <div className='mt-4 mx-6 overflow-y-scroll h-[340px] py-2'>
                <OrderList />
                <OrderList />
                <OrderList />
                <OrderList />
                <OrderList />
                <OrderList />
            </div>
        </div>
    </div>
  )
}

export default RecentOrders