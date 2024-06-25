import React, { useState } from 'react';
import Login from '../Components/Login';
import Register from '../Components/Register';
import { useNavigate } from 'react-router-dom';




const Authentication = () =>{

    const [showLogin, setShowLogin] = useState(true);
    const navigate = useNavigate();


    const handleClickLogin = () => {
        setShowLogin(true);
        // navigate('/login');
      };

      const handleClickRegister = () => {
        setShowLogin(false);
        // navigate('/register');
      };


    return(
        <> 

                <div className="App">
                    {/* <nav className="bg-gray-800 p-4 "> */}
                        {/* <div className="container  mx-auto flex justify-center  md:justify-end sm:justify-end">
                        <button
                           onClick={handleClickLogin}
                            className={` mr-4  border-4 border-white rounded  p-[1rem] ${
                            showLogin ? 'bg-white text-black-500' : 'border-white text-white'} `}
                        >
                            Login
                        </button>
                        <button
                             onClick={handleClickRegister}
                            className= {` mr-4 md:ml-[2rem] border-4 border-white rounded  p-[1rem] ${
                            !showLogin ? 'bg-white text-black-500' : 'border-white text-white'}`}
                        >
                            Register
                        </button>
                        </div> */}
                    {/* </nav> */}
                    <main className="flex-grow flex justify-center items-center p-4">
                        {showLogin ? <Login /> : <Register />}
                    </main>
                </div>

        </>

    );
}

export default Authentication;



