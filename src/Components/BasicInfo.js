import React from "react";
import {BasicInfoList, OtherInfoList} from "./BasicInfoList";



const BasicInfo = () =>{
    return(
        <>
         <div className="w-auto h-auto  grid justify-center align-center items-center mb-[2rem] ml-auto mr-auto ">
          <h1 className="text-center text-[2rem] font-semibold text-black mt-1 mb-4  text-gray-700">Basic Information Section </h1>
          <div className="mb-6 mt-6 w-auto   flex  justify-between space-x-[2rem]">
                {BasicInfoList.map((currElem, index) => (
                    <div key = {index} className="grid justify-between  items-center align-center ">

                    <label  className="text-[1.5rem]"> {currElem.label}</label>
                    <input
                    placeholder={currElem.placeHolder}
                    className="w-[70vh] px-3 py-4 text-[1.3rem] font-medium shadow-lg bg-gray-100 rounded-lg"
                    required
                    />
                 </div>
                ))
               }   
          </div>  

          <div className="mt-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {OtherInfoList.map((currElem, index) => (
                    <div key={index} className="flex flex-col space-y-4 items-start">
                        <label className="text-[1.4rem] font-roboto">{currElem.label}</label>

                        {currElem.dropdownOptions ? (
                    <select
                        className="w-full px-3 py-4 text-[1.3rem]  text-gray-500 font-medium shadow-lg bg-gray-100 rounded-lg border-2 "
                        required
                    >
                        {currElem.dropdownOptions.map((option, idx) => (
                            <option key={idx} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                ) : (
                    <input
                        placeholder={currElem.placeHolder}
                        className="w-full px-3 py-4 text-[1.3rem] font-medium shadow-lg bg-gray-100 rounded-lg border-2 "
                        required
                    />
                )}
                    </div>
                ))}
            </div>
        </div>    
     </div>
            
        </>
    )
}
export default BasicInfo