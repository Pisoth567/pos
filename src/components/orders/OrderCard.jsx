import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";

const OrderCard = () => {
  return (
    <div className="w-[450px] bg-[#2b2b2b] p-5 rounded-xl text-white">

      {/* Top section */}
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          {/* Avatar */}
          <div className="bg-[#f6b100] text-black font-bold text-lg w-12 h-12 flex items-center justify-center rounded-lg">
            PS
          </div>

          {/* Customer info */}
          <div>
            <h2 className="text-lg font-semibold">Pisoth</h2>
            <p className="text-sm text-gray-400">#101/ Dine in</p>
          </div>
        </div>

        {/* Status */}
        <div className="flex flex-col items-end gap-2">
          <span className="flex items-center gap-2 bg-[#1f3d2f] text-green-500 px-3 py-1 rounded-full text-sm">
            <FaCheck />
            Ready
          </span>

          <span className="flex items-center gap-2 text-gray-400 text-sm">
            <FaCircle className="text-green-500 text-xs" />
            Ready to serve
          </span>
        </div>
      </div>

      {/* Middle info */}
      <div className="flex justify-between items-center mt-5 text-gray-400 text-sm">
        <p>January 18, 2025 08:32 PM</p>
        <p>8 Items</p>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-600" />

      {/* Total */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Total</h3>
        <p className="text-lg font-semibold">$1</p>
      </div>
    </div>
  );
};

export default OrderCard;
