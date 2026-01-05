import React, { useState } from "react";
import { menus } from "../../constants/index";
import { GrRadialSelected } from "react-icons/gr";
import { getBgColor } from "../../utils";
import { IoMdCart } from "react-icons/io";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [itemCount, setItemCount] = useState(0);
  const [itemID, setItemID] = useState(0);

  const increment = (id) => {
    setItemID(id);
    if(itemCount >= 4) return;
    setItemCount((prev) => prev + 1);
  };
  const decrement = (id) => {
    setItemID(id);
    if( itemCount <= 0) return;
      setItemCount((prev)=> prev - 1);
  };
  
  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {menus.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start  justify-between p-4 rounded-lg h-[100px] cursor-pointer"
              style={{ backgroundColor: menu.bgColor }}
              onClick={() => {
                setSelected(menu);
                setItemID(0);
                setItemCount(0);
            }}
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[#f5f5f5] text-xl font-semibold">
                  {menu.icon} {menu.name}
                </h1>
                {selected.id === menu.id && (
                  <GrRadialSelected className="text-white" size={20} />
                )}
              </div>
              <p className="text-[#ababab] text-sm font-semibold">
                {menu.items.length} Items
              </p>
            </div>
          );
        })}
      </div>

      <hr className="border-[#2a2a2a] border-t-2 mt-4" />

      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%] h-[350px]  overflow-scroll">
        {selected?.items.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer hover:bg-[#2a2a2a] bg-[#1a1a1a]"
            > 
              <div className="flex items-start justify-between w-full">
                <h1 className="text-[#f5f5f5] text-lg font-semibold">
                  {menu.name}
                </h1>
                <button className="bg-[#2e4a40] text-[#02ca3a] p-2 cursor-pointer rounded-md">
                  <IoMdCart size={20} />
                </button>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-white text-xl font-bold">$ {menu.price}</p>
                <div className="flex gap-6 items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg">
                  <button
                    onClick={() => decrement(menu.id)}
                    className="text-yellow-500 text-2xl"
                  >
                    &minus;
                  </button>
                  <span className="text-white">{menu.id === itemID ? itemCount : '0'}</span>
                  <button
                    onClick={() => increment(menu.id)}
                    className="text-yellow-500 text-2xl"
                  >
                    &#43;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuContainer;
