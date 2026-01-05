import React, { useEffect, useRef } from "react";
import CustomerInfo from "./CustomerInfo";
import Bill from "./Bill";
import { GrEdit } from "react-icons/gr";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/slices/cartSlice";
const CartInfo = () => {
  const cartData = useSelector((state) => state.cart);
  const scrollRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: "smooth"
        });
    }
}, [cartData]);

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="bg-[#1a1a1a] mt-4  mr-3 h-[670px] rounded-lg pt-2 flex flex-col">
      <CustomerInfo />

      {/* Order Details */}
      <div className="px-4 py-2 flex-1">
        <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide mb-4">
          Order Details
        </h1>

        {/* Cart Items */}
        <div className="mt-4 overflow-x-scroll h-[280px]"  ref={scrollRef}>
            {cartData.length === 0 ? (
                <p className="text-[#ababab] text-lg flex justify-center items-center ">
                    {" "}
                    Your Cart is Empty! Start Adding items...
                </p>
                ) : (
                cartData.map((item) => {
                    return (
                    <div
                        className="space-y-4 p-3 mt-2 myItem"
                        style={{ backgroundColor: "rgba(29, 29, 29, 0.8)" }}
                    >
                        {/* Item 1 */}
                        <div className="flex items-center justify-between ">
                        <div className="flex flex-col">
                            <span className="text-white font-medium">{item.name}</span>
                            <div className="flex items-center gap-2 mt-3">
                            <button className="text-[#ababab] hover:text-white">
                                <GrEdit />
                        </button>
                        <button
                            onClick={() => handleRemove(item.id)}
                            className="text-[#ababab] hover:text-red-500"
                        >
                            <FaRegTrashCan />
                        </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-[#ababab] text-sm">
                        × {item.quantity}
                        </span>

                        <span className="text-white font-bold">${item.price}</span>
                    </div>
                    </div>
                </div>
                );
            })
            )}
        </div>
      </div>

      <Bill />
    </div>
  );
};

export default CartInfo;
