import React from "react";
import UserProfile from "./UserProfile";
import { useNavigate } from 'react-router-dom';
import HandleCreate from "./HandleCreate";
import CreateUser from './CreateUser';
import { UserContext } from './UserContext';
import { useContext } from 'react';
import { IoIosContact } from "react-icons/io";
import { PiAddressBook } from "react-icons/pi";
import { MdOutlineContactPhone } from "react-icons/md";
import { IoApps } from "react-icons/io5";


const DashMenu = () => {

  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();

  const handleClickCreate = () => {
    navigate('/handle_create');
  };

  const handleProfileClick = ()=>{
    navigate('/adminProfile');
  };
  const handlClickApp = () =>{
    navigate('/application')
  }

 

  return (
    <>
      <div className="h-auto w-auto justify-between space-y-6 flex flex-col">

        <div className="h-auto relative  pr-[3rem] justify-center  align-center w-full flex flex-row bg-[#0F254E]">
          <div className="flex h-auto p-[2rem] w-auto justify-between space-x-4">
            <img src='/Images/vgroup_logo-removebg-preview.png' alt='logo' className="h-[4rem] w-[4rem] justify-first" />

            <div className="grid">
              <p className="lg:text-[0.5rem] md:text-[0.5rem] sm:text-[0.5rem] text-white ">Welcome To </p>
              <h1 className="font-bold lg:text-[2rem] md:text-[2rem] sm:text-[1.5rem] text-blue-500">VGroup Admin Panel </h1>
            </div>

          </div>

        </div>

        <div className="h-[70vh] mt-[5rem] justify-start space-x-9 w-auto  align-center  flex flex-row ">
          <div className="w-auto  bg-[#0F254E] justify-center items-center align-center pl-[2rem] pr-[0.5rem]">
            <h1 className="justify-center align-center items-center text-white text-[1rem] mt-[1rem] font-bold">Admin User</h1>
            <div className="flex flex-col  jsutify-start align-start  items-start mr-[2rem]  mt-[5rem]">
              
               <div className="flex flex-col justify-start space-y-10 align-start items-left">
                  <div className="flex flex-row justfiy-center space-x-3 items-center align-center">
                      <IoIosContact  className="text-white text-[1.5rem]"  />
                        <p className="text-white font-poppins text-[0.9rem] cursor-pointer" onClick={handleProfileClick} >Admin Profile</p>
                  </div>
                  <div className="flex flex-row justfiy-center space-x-3 items-center align-center">
                    <PiAddressBook  className="text-white text-[1.5rem]" />
                    <p className="text-white text-[0.9rem] " >Admin Address</p>
                 </div>

                 <div className="flex flex-row justfiy-center space-x-3 items-center align-center">
                     <MdOutlineContactPhone  className="text-white text-[1.5rem]" />
                      <p className="text-white text-[0.9rem] " >Admin Contact</p>
                 </div>

                 <div className="flex flex-row justfiy-center space-x-3 items-center align-center">
                     <IoApps   className="text-white text-[1.5rem]" />
                      <p className="text-white text-center text-[0.9rem] cursor-pointer" onClick={handlClickApp} >Application</p>
                 </div>


               </div>

              <button className="bg-blue-500 text-[1rem] p-[0.5rem] text-white border-1 mt-[5rem] rounded-md" onClick={handleClickCreate} >Create User</button>
             
            </div>

          </div>

          <div className="relative  ml-[3rem] mb-auto  mr-auto justify-start align-center items-center  h-full w-[85%] ">
            <div className="h-auto   w-auto ml-auto mr-auto p-[0.5rem]">
              <UserProfile />
              {/* <HandleCreate /> */}
            </div>
          </div>
        </div>



      </div>

    </>
  )
}
export default DashMenu;