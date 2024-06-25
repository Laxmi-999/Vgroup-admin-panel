import React from "react";

import { AddressInfoList } from "./BasicInfoList";

const AddressInfo = () =>{

        return(
        <>
            <div className="justify-between grid align-start items-start w-auto  h-auto mb-[2rem] ">
                <h1 className="text-center text-[2rem] font-semibold text-black mt-1 mb-4  text-gray-700"> Address Information Section </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4  w-full ml-[1rem]" >

                {AddressInfoList.map((currElem, index) =>(
                    <div key={index} className="flex flex-col space-y-4 items-start ">
                                <label className="text-[1.4rem] font-roboto">{currElem.label}</label>
                                <input
                                    placeholder={currElem.placeHolder}
                                    className="w-[70vh] px-3 py-4 text-[1.3rem] font-medium shadow-lg bg-gray-100 rounded-lg"
                                    required
                        />
                    </div>
                ))}
                </div>
            </div>

                </>
            )
        }
export default AddressInfo;