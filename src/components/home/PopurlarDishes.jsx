import React from 'react'
import { popurlarDishes } from '../../constants'

const PopurlarDishes = () => {
  return (
    <div className='mt-6 pr-6  '>
        <div className='bg-[#1a1a1a] w-full rounded-lg relative' style={{boxShadow: '0 0 2px white'}}>
            <div className='flex justify-between items-center px-6 py-4'>
                <h1 className='text-[#f5f5f5] text-2xl font-semibold tracking-wide'>Popular Dishes</h1>
                <a href="" className='text-[#025cca] text-md font-semibold'>View All</a>
            </div>
        </div>


        <div className='overflow-y-scroll h-[700px]'>
            {
                popurlarDishes.map((dish)=> {
                    return (
                        <div key={dish.id} className='flex items-center gap-4 bg-[#1a1a1a] rounded-[15px] px-6 py-4 mt-2 mx-6'>
                            <h1 className='text-[#f5f5f5] font-bold text-xl mr-5'>{dish.id<10 ? `0${dish.id}`: dish.id}</h1>
                            <img src={dish.image} alt={dish.name} className='w-[80px] h-[80px] rounded-full'/>
                            <div>
                                <h1 className='text-[#f5f5f5] text-2xl font-semibold tracking-wide'>{dish.name}</h1>
                                <p className='text-[#f5f5f5] text-sm font-semibold mt-1'>
                                    <span className='text-[#ababab]'>Orders: </span>
                                    {dish.numberOfOrders}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default PopurlarDishes