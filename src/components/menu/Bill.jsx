import React from 'react';

const Bill = () => {
    return (
        <div className="px-4 py-2 border-t border-[#2a2a2a] mt-4">
            <div className="flex justify-between mb-2">
                <span className="text-[#ababab]">Items(4)</span>
                <span className="text-white font-bold">$240</span>
            </div>
            
            <div className="flex justify-between mb-4">
                <span className="text-[#ababab]">Tax(5.25%)</span>
                <span className="text-white font-bold">$24</span>
            </div>
            
            <div className="flex gap-2 mb-4">
                <button className="flex-1 bg-[#2a2a2a] text-white py-2 rounded-lg hover:bg-[#333]">
                    Cash
                </button>
                <button className="flex-1 bg-[#2a2a2a] text-white py-2 rounded-lg hover:bg-[#333]">
                    Online
                </button>
            </div>
            
            <div className="flex gap-2">
                <button className="flex-1  text-white font-bold py-3 rounded-lg bg-blue-600">
                    Print Receipt
                </button>
                <button className="flex-1 bg-[#f6b100] text-[#1a1a1a] font-bold py-3 rounded-lg hover:bg-yellow-600">
                    Please Order
                </button>
            </div>
        </div>
    );
};

export default Bill;