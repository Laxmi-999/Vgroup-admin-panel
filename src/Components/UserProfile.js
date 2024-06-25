// UserProfile.js
import React, { useContext } from 'react';
import { UserContext } from './UserContext'; // Ensure the correct path
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();

  const handleClickUpdate = (user) => {
    dispatch({ type: 'UPDATE_SELECTED_USER', payload: user });
    navigate(`/update`);

  };

  const handleClickRemove = (userName) => {
    dispatch({ type: 'REMOVE_USER', payload: userName });
  };

  const handleImgClick = (user) =>{
    dispatch({ type: 'VIEW_MORE', payload: user });
    navigate('/singleProfile');
  }

  return (
    <div className="min-h-screen bg-gray-100  p-4">
    <h1 className='text-center text-[1.5rem] font-bold text-blue-500 '> Available Users</h1>
      <div className="mt-4">
        {state.userData.map(user => (
          <div key={user.id} className="flex justify-between p-[5px] align-center items-center  bg-gray-200 mb-4">
            <div className="flex flex-col justify-center align-center items-center">
              <div className="h-[5rem] w-[5rem] rounded-full p-auto justify-center align-center bg-blue-500 mr-auto ml-[2rem] items-center">
                <img src={user.img} alt='userImg'   className="h-full w-full rounded-full cursor-pointer" />
              </div>
              <div className="flex flex-col justify-center align-center items-center">
                <h1 className="text-[10px] font-bold text-black">{user.name}</h1>
                <p className="lg:text-[9px] md:text-[0.5rem] text-gray-800">{user.edu}</p>
              </div>
            </div>
            <div className="flex h-auto w-auto justify-between space-x-4 mr-[3rem]">
            <button
                className="bg-[#0F254E] text-[0.8rem] p-[0.5rem] text-white border-1 rounded-md"
                onClick= {() => handleImgClick(user)}
              >
                View More
              </button>

              <button
                className="bg-[#0F254E] text-[0.8rem] p-[0.5rem] text-white border-1 rounded-md"
                onClick={() => handleClickUpdate(user)}
              >
                Update
              </button>
              <button
                className="bg-[#0F254E] text-[0.8rem] p-[0.5rem] text-red-500 border-1 rounded-md"
                onClick={() => handleClickRemove(user.name)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
