import React, { Component } from "react";
import  CheckOutStepper from './CheckOutStepper';
import BasicInfo from "./BasicInfo";
import AddressInfo from "./AddressInfo";

const CheckOut_Steps = [
    {
        name:" Basic Information Section",
        Component : () =><div><BasicInfo /> </div>
    },
    {
        name:" Address Section",
        Component : () =><div><AddressInfo /> </div>
    },
    {
        name:" Address Section",
        Component : () =><div>Address section </div>
    },
    {
        name:" Address Section",
        Component : () =><div>Address section </div>
    },
    {
        name:" Address Section",
        Component : () =><div>Address section </div>
    },
    {
        name:" Address Section",
        Component : () =><div>Address section </div>
    },
    {
        name:" Address Section",
        Component : () =><div>Address section </div>
    },
    {
        name:" Address Section",
        Component : () =><div>Address section </div>
    },
    {
        name:" Address Section",
        Component : () =><div>Address section </div>
    },
    
    
];

function AppList () {
    return(
        <div>
            <CheckOutStepper stepConfig = {CheckOut_Steps} />
        </div>
    )
}
export default AppList

