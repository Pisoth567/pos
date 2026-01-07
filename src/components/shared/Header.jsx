import React from 'react';
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import logo from "../../assets/images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { IoLogOut } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
import { logout } from '../../https';
import { removeUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';



const Header = () => {
    const userData = useSelector(state => state.user );

    const navigate = useNavigate();

    const dispatch = useDispatch()
    const logoutMutation = useMutation({
        mutationFn: ()=> logout(),
        onSuccess: (data) => {
            console.log(data);
            dispatch(removeUser());
            navigate("/auth");
        },
        onError: (error) => {
            console.log(error);
            
        }
    })
    const handleLogout = ()=>{
        logoutMutation.mutate();
    }


  return (
    <header className='flex justify-between items-center  px-8 bg-[#1a1a1a]'>
        {/* logo */}
        <div className='flex items-center gap-2'>
            <img src={logo} className='h-[100px] my-shadow' alt="" />
            <h1 className='text-3xl font-semibold text-[#f5f5f5]'>COMO</h1>
        </div>

        {/* search */}
        <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-3">
            <FaSearch className="text-[#f5f5f5]" />
            <input type="text" placeholder="Search" className="bg-transparent text-[#f5f5f5] outline-none" />
        </div>

        {/* Logged User Details*/}
        <div className='flex items-center gap-4'>
            <div className='bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer'>
                <FaBell className='text-[#f5f5f5] text-2xl'/>
            </div>
            <div className='flex items-center gap-3 cursor-pointer'>
                <FaUserCircle className='text-[#f5f5f5] text-5xl'/>
            </div>
            <div className='flex flex-col items-start'>
                <h1 className='text-lg text-[#f5f5f5] font-semibold'>{userData.name || "User"}</h1>
                <p className='text-lg text-[#ababab] font-medium'>{userData.role || "role"}</p>
            </div>
            <IoLogOut onClick={handleLogout} className="text-white ml-2" size={40}/>
        </div>
    </header>
  )
}

export default Header