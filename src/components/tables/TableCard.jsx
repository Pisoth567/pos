import React from "react";
import { getBgColor } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTable } from "../../redux/slices/customerSlice";

const TableCard = ({ name, status, initial, seats }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (name) => {
    if (status === "Booked") {
      alert("This table is already booked!");
      return;
    }

    dispatch(updateTable({tableNo : name }));

    navigate("/menu");
  };

  return (
    <div
      onClick={()=>handleClick(name)}
      className="w-[300px] hover:bg-[#2c2c2c] bg-[#262626] p-4 rounded-lg cursor-pointer transition-colors duration-200"
    >
      <div className="flex items-center justify-between px-1">
        <h1 className="text-white text-xl font-semibold">{name}</h1>
        <p
          className={`${
            status === "Booked"
              ? "text-green-600 bg-[#2e4a40]"
              : "bg-[#664a04] text-white"
          } px-2 py-1 rounded-lg text-sm font-medium`}
        >
          {status}
        </p>
      </div>

      <div className="flex items-center justify-center mt-5 mb-10">
        <h1
          className="text-white rounded-full p-5 text-xl font-bold"
          style={{ backgroundColor: getBgColor() }}
        >
          {initial}
        </h1>
      </div>

      <p className="text-[#ababab] text-sm">
        Seats: <span className="text-[#f5f5f5] font-medium">{seats}</span>
      </p>
    </div>
  );
};

export default TableCard;
