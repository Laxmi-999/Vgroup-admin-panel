import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';







const Update = () => {



  const { state, dispatch } = useContext(UserContext);

  const [user, setUser] = useState(state.selectedUser);

  const navigate = useNavigate();



  const handleClickSave = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch({ type: 'UPDATE_USER', payload: user });
  };
  const handleClickBack = () =>{
    navigate('/dashboard');
  }
  // const [formData, setFormData] = useState({
  //   id: "",
  //   name: '',
  //   edu: '',
  //   address: '',
  //   skill: '',
  //   img: ''
  // });

  const handleChange = (e) => {
    
    setUser({ ...user, [e.target.name]: e.target.value });
  };





  return (
    <>
      <div className="min-h-screen mb-[10rem] flex items-center justify-center p-4">
        <div className='justify-center h-auto w-full ml-auto mr-auto'>
          <img src='/Images/wallpaper.jpg' alt='img' className="absolute inset-40 w-auto ml-auto mr-auto h-[80%] object-cover" />
        </div>
        <div className='absolute inset-40 ml-[20rem] mr-auto justify-center align-center items-center'>
          <h1 className="text-[2rem] ml-[8rem] font-bold mb-3">Upadate User</h1>
          <form className="w-full max-w-sm" >
            <div className="mb-4">
              <label className="block text-black-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black-700 text-sm font-bold mb-2">Education</label>
              <input
                type="text"
                name="edu"
                value={user.edu}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black-700 text-sm font-bold mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black-700 text-sm font-bold mb-2">Skill</label>
              <input
                type="text"
                name="skill"
                value={user.skill}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black-700 text-sm font-bold mb-2">Image URL</label>
              <input
                type="text"
                name="img"
                value={user.img}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className='flex justify-center mt-[3rem] items-center align-center '>
              <button type="submit" onClick={handleClickSave} className="bg-blue-500 ml-[8rem] text-white p-3 rounded">Save</button>
              <button type="submit" onClick={handleClickBack} className="bg-gray-800 ml-[8rem] text-white p-3 rounded">Back</button>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}
export default Update;