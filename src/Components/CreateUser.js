// CreateUser.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateUser({ addUser }) {
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.edu && formData.address && formData.skill && formData.img) {
      addUser(formData);

      setFormData({
        id: "",
        name: '',
        edu: '',
        address: '',
        skill: '',
        img: ''
      });
    } else {
      alert("Please fill all the fields.");
    }
  };

  const [formData, setFormData] = useState({
    id: "",
    name: '',
    edu: '',
    address: '',
    skill: '',
    img: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, id: formData.name, [e.target.name]: e.target.value });
  };
  const handleClickBack = () =>{
    navigate('/dashboard');
  }

  return (
    <div className="min-h-screen mb-[10rem] flex items-center justify-center p-4">
      <div className='justify-center h-auto w-full ml-auto mr-auto'>
        <img src='/Images/wallpaper.jpg' alt='img' className="absolute inset-40 w-auto ml-auto mr-auto h-[80%] object-cover" />
      </div>
      <div className='absolute ml-auto mt-[5rem] mr-auto justify-center align-center items-center'>
        <h1 className="text-[2rem] ml-[5rem] font-bold mb-3">Create User</h1>
        <form onSubmit={handleSubmit} className="w-full" >
          <div className="mb-4">
            <label className="block text-black-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black-700 text-sm font-bold mb-2">Education</label>
            <input
              type="text"
              name="edu"
              value={formData.edu}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black-700 text-sm font-bold mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black-700 text-sm font-bold mb-2">Skill</label>
            <input
              type="text"
              name="skill"
              value={formData.skill}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black-700 text-sm font-bold mb-2">Image URL</label>
            <input
              type="text"
              name="img"
              value={formData.img}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className='flex justify-between space-x-5  mt-[4rem] items-center align-center'>
              <button type="submit" className="bg-blue-500 ml-[8rem] text-white p-2 rounded">Create</button>
              <button onClick={handleClickBack} className="bg-gray-800 justify-start align-start text-white p-2 rounded">Back</button>
          </div>
        </form>
      </div>
      </div>
  );
}

export default CreateUser;
