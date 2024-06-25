import React, { useEffect, useRef, useState } from "react";



const CheckOutStepper = ({ stepConfig = [] }) => {
    const [selectedtStep, setSelectedStep] = useState(1);
    const [isCompleted, setIsCompleted] = useState();


    
    const[margins, setMargins] = useState({
        marginLeft:0, 
        marginRight:0,
    })

    const stepRef = useRef([]);

    useEffect(() =>{
        setMargins({
            marginLeft: stepRef.current[0].offsetWidth/2,
            marginRight: stepRef.current[stepConfig.length - 1].offsetWidth/2,


        })
        console.log(stepRef.current[0].offsetWidth);


     }, [stepRef]);

    const handleNext = () => {
        setSelectedStep((prevState) => {
            if (prevState === stepConfig.length) {
                setIsCompleted(true);
                return prevState;
            } else {
                return  prevState + 1;
            }
        }
    );
    };
    const handleClickBack = () =>{
        setSelectedStep((prevState) => {
            if (prevState === stepConfig.length) {
                setIsCompleted(true);
                return prevState;
            } else {
                return  prevState - 1;
            }
        }
        
    );
}
    

    const calculateProgressBarWidth = () =>{
        return ((selectedtStep-1) / (stepConfig.length -1) ) *100;
    }
    if (!stepConfig)
        return (
            <>
            </>

        )
    const ActiveComponent = stepConfig[selectedtStep - 1].Component;
    return (
        <>
        <div className="justify-center items-center align-center">
            <div className='relative flex justify-between  mt-[2rem] items-center mb-[20px]'>

                <div className="absolute h-[8px] top-[38%]  left-0  right-0 bg-blue-500"
                style = {{
                    width: `calc(100% - ${margins.marginLeft + margins.marginRight} px)`,
                    marginLeft : margins.marginLeft,
                    marginRight : margins.marginRight,

                }}
                >
                    <div className= {`h-[100%]  ease-in duration-200 bg-blue-500 `}  style={{ width: `${calculateProgressBarWidth() }%` }} ></div>
                </div>
                {stepConfig.map((step, index) => {

                    return (
                        <div key={step.name} 
                        ref = {(elem) => (stepRef.current[index]) = elem }
                        className= "flex flex-col relative items-start jsutify-start align-start  "  >

                            <div className={` ${selectedtStep > index  ? "bg-blue-500 text-white border-8 border-gray-200" : "bg-gray-100 text-blue border-8 border-blue-500"}  w-[4rem] h-[4rem] text-black-500   rounded-full  flex z-2 justify-center  items-center mb-[5px]`} >
                                {index + 1} </div>
                            {/* <div className=" text-[1rem] font-semibold">{step.name} </div> */}
                        </div>

                    );
                })}

            </div>


            <ActiveComponent />
            
            {!isCompleted && (
                <button className="h-auto w-auto text-white rounded-md  text-[1.5rem] font-semibold align-center   py-4 px-6   bg-blue-500 ml-[55rem] mr-auto mb-[4rem] " onClick={handleNext}>{selectedtStep === stepConfig.length ? "Finished" : "Save and Continue"}</button>
            )}
       { selectedtStep > 1 && (
        <button  onClick={handleClickBack}
            className="h-auto w-auto text-white rounded-md  text-[1.5rem] font-semibold align-center  py-4 px-6   bg-red-500 ml-[1rem] mr-auto">Go Back</button>

       )}    
        </div>
        </>
    )
}
export default CheckOutStepper;