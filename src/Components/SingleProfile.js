import React from "react";
import  { useState, useContext } from 'react';
import { UserContext } from './UserContext'; 
import { useNavigate } from 'react-router-dom';


const SingleProfile =  () =>{

    const { state, dispatch } = useContext(UserContext);
    // console.log(state);
    const [user, setUser] = useState(state.selectedUser);
    console.log('seleceted user details', user);

    const navigate = useNavigate();

    const handleClickBack = () =>{
        navigate('/dashboard');
    }



    return(
        <>
        <div className="flex h-cover width-auto bg-gray-100 ">
        <div className="h-auto  w-auto p-[2rem] ml-auto mr-auto justify-center align-center items-center bg-gray-200 mt-[10rem] mb-[10rem] flex flex-col">
                <div className="flex justifty-center h-[50%] w-[50%] mb-[0.5rem]">
                    <img src = {user.img} alt = '' className="h-auto w-auto justify-center align-center items-center ml-auto mr-auto" />
                </div>
                
                <div  className="justify-center space-y-4 align-center items-center ">
                <h1 className="text-center font-bold text-[1.5rem] text-blue-500">Name:  {user.name}</h1>
                <p className="ml-[1rem]"> <span className="font-bold">Education: </span>  {user.edu}</p>
                <p  className="ml-[1rem]"> <span className="font-bold">  Address: </span>  {user.address}</p>
                <p  className="ml-[1rem]"><span className="font-bold">Skill: </span>       {user.skill}</p>
                </div>
        </div>
        <button onClick={handleClickBack}
                className="bg-[#0F254E] absolute h-auto w-auto  text-[1rem] p-[1rem] mt-[5rem] ml-[3rem] text-white border-1 rounded-md">Back
        </button>            

        </div>

        </>
    )
}
export default SingleProfile;