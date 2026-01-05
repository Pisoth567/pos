import React from 'react';
import CustomerInfo from './CustomerInfo';
import Bill from './Bill';
import { GrEdit } from "react-icons/gr";
import { FaRegTrashCan } from "react-icons/fa6";
const CartInfo = () => {
    return (
        <div className="bg-[#1a1a1a] mt-4 mr-3 h-[670px] rounded-lg pt-2 flex flex-col">
            <CustomerInfo />
            
            {/* Order Details */}
            <div className="px-4 py-2 flex-1">
                <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide mb-4">Order Details</h1>
                
                {/* Cart Items */}
                <div className="space-y-4">
                    {/* Item 1 */}
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-white font-medium">Chicken Tikka</span>
                            <span className="text-[#ababab] text-sm">× 2</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="text-[#ababab] hover:text-white"><GrEdit /></button>
                            <button className="text-[#ababab] hover:text-red-500"><FaRegTrashCan /></button>
                            <span className="text-white font-bold">$123</span>
                        </div>
                    </div>
                    
                    {/* Item 2 */}
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-white font-medium">Chicken Tikka</span>
                            <span className="text-[#ababab] text-sm">× 2</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="text-[#ababab] hover:text-white"><GrEdit /></button>
                            <button className="text-[#ababab] hover:text-red-500"><FaRegTrashCan /></button>
                            <span className="text-white font-bold">$123</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <Bill />
        </div>
    );
};

export default CartInfo;