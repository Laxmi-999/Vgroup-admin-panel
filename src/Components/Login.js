import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
    
  };
  const handleRegister = () =>{
    navigate('/register');
  }

  return (
    <div className="h-auto w-full align-center flex  ml-0 items-center  ">

        <div className='justify-start align-start item-center h-[90vh] shadow-lg bg-white   w-[50%] '>
            <img src = 'https://verifiedmovingreviews.com/wp-content/uploads/2024/01/shutterstock_2031933263-1024x820.jpg'  alt = 'img' className="inset-10 w-[100%] h-full object-cover shadow-xl h-full " />

        {/* <div className="relative flex justify-center items-center h-full mb-[10rem]">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
            
            </h1>
      </div> */}
 </div>
    
      <div className="grid justify-start ml-[5rem] align-start items-center  h-[70vh] w-[50%]">
       <div className='w-auto h-auto mb-[1.5rem] ml-[13rem]'>
        <img src = '/Images/toddleLogo-removebg-preview.png'  className='h-[70%] w-[45%]'/>
       </div>

       <div className='mb-[3.5rem] ml-[6rem] mr-auto'>
           <h2 className="text-[1.7rem] font-roboto text-gray-900 h-4 text-center">Welcome To Toddle Abroad Services</h2>
       </div>

        <form onSubmit={handleLogin} className='justify-between  grid items-center ailgn-center    '>
          <div className="justify-center w-auto align-center items-center mt-auto mb-[3rem]">
            <input
              type="email"
              value={email}
              placeholder='Enter Email or Phone'
              onChange={(e) => setEmail(e.target.value)}
              className="w-[80vh] px-3 py-4  text-[1.3rem] font-medium shadow-lg bg-gray-100 rounded-lg"
              required
            />
          </div>
          <div className="mb-6 w-auto  ">
            <input
              type="password"
              value={password}
              placeholder='Enter Password'
              onChange={(e) => setPassword(e.target.value)}
              className="w-[80vh] px-3 py-4 text-[1.3rem] font-medium shadow-lg bg-gray-100 rounded-lg"
              required
            />
          </div>

          <div className='grid  items-center items-center'>
            <p className='leading-loose text-gray-500 font-medium text-[1.3rem] '>Forget Password ?</p>

             <div className='justify-center  align-center  items-center ml-auto mr-auto p-0 mt-[2rem] '>
                <button
                  type="submit"
                  className= "mb-6  ml-[3rem] text-[1.5rem] text-white  px-[6rem] py-2 rounded-lg bg-blue-800"
                >
                  Login
              </button>
                  <p className='text-[1.4rem]  text-gray-500 '>Don't Have Account  ? <span className='text-blue-500 font-semibold cursor-pointer' onClick={handleRegister}>Register Now</span></p>
           </div> 
          
         </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
