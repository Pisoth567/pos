import React from "react";
import BottomNav from "../components/shared/BottomNav";
import BackBotton from "../components/shared/BackBotton";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { RiRestaurant2Fill } from "react-icons/ri";
import MenuContainer from "../components/menu/MenuContainer";
import CartInfo from "../components/menu/CartInfo";
import { useSelector } from "react-redux";

const Menu = () => {

  const customerData = useSelector(state => state.customer)

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* Left Div */}
      <div className="flex-[3]">
        <div className="flex items-center justify-between px-10 py-4">
          <div className="flex items-center gap-4">
            <BackBotton />
            <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
              Menu
            </h1>
          </div>
          <div className="flex items-center justify-around gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 cursor-pointer">
                <RiRestaurant2Fill className="text-[#f5f5f5] text-5xl" />
              </div>
              <div className="flex flex-col items-start">
                <h1 className="text-lg text-[#f5f5f5] font-semibold">
                  {customerData.customerName || "Customer Name"}
                </h1>
                <p className="text-md text-[#ababab] font-medium">
                  {customerData.tableNo || "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <MenuContainer />
      </div>
      {/* Right Div */}

      <div className="flex-[1]">
        <CartInfo />
      </div>
    </section>
  );
};

export default Menu;
