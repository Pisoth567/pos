import React, { useState } from 'react'
import BottomNav from '../components/shared/BottomNav'
import OrderCard from '../components/orders/OrderCard'
import BackBotton from '../components/shared/BackBotton'

const Orders = () => {
  const [status, setStatus] = useState('all');
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5.5rem)] overflow-hidden'>
      <div className='flex items-center justify-between px-10 py-4'>
      <div className='flex gap-2 items-center'>
        <BackBotton />
        <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wide'>Orders</h1>
      </div>
        <div className='flex items-center justify-around gap-4'>
          <button onClick={()=> setStatus('all')} className={`text-[#ababab] text-lg ${status === 'all' && 'bg-[#383838] rounded-lg px-5 py-2'} rounded-lg px-5 py-2 font-semibold`}>All</button>
          <button onClick={()=> setStatus('progress')} className={`text-[#ababab] text-lg ${status === 'progress' && 'bg-[#383838] rounded-lg px-5 py-2'} rounded-lg px-5 py-2 font-semibold`}>Progress</button>
          <button onClick={()=> setStatus('ready')} className={`text-[#ababab] text-lg ${status === 'ready' && 'bg-[#383838] rounded-lg px-5 py-2'} rounded-lg px-5 py-2 font-semibold`}>Ready</button>
          <button onClick={()=> setStatus('completed')} className={`text-[#ababab] text-lg ${status === 'completed' && 'bg-[#383838] rounded-lg px-5 py-2'} rounded-lg px-5 py-2 font-semibold`}>Completed</button>

        </div>
      </div>

      <div className='flex flex-wrap gap-6 px-16 py-4 h-[calc(100vh-17rem)] overflow-scroll'>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />

      </div>
      <BottomNav />
    </section>
  )
}

export default Orders