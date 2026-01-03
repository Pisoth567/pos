import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const BackBotton = () => {
  const navigate = useNavigate();
  return (
    <botton onClick={() => navigate(-1)} className="bg-[#f6b100] p-3 text-xl rounded-md">
        <IoMdArrowRoundBack />
    </botton>
  )
}

export default BackBotton