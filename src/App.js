
import Authentication from './Pages/Authentication';
import DashBoard from './Pages/DashBoard';
import Delete from './Components/Delete';
import Update from './Components/Update';
import SingleProfile from './Components/SingleProfile';
import CreateUser from './Components/CreateUser.js';
import { UserProvider } from './Components/UserContext.js';
import Application from './Pages/Application';

import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';
import HandleCreate from './Components/HandleCreate.js';
import AdminProfile from './Components/AdminProfile.js';
import Login from './Components/Login.js';
import Register from './Components/Register.js';

const App = () => {

  return (

    <>
     <UserProvider>
      <Router>
        <div>
          <Routes>

             <Route path='/' element={<Authentication />} />
             <Route path='/login' element={<Login />} />
             <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<DashBoard />} />
            <Route path='/delete' element={<Delete />} />
            <Route path='/update' element={<Update />} />
            <Route path='/singleProfile' element={<SingleProfile />} />
            <Route path='/adminProfile' element={<AdminProfile />} />
            <Route path='/create' element={<CreateUser />} />
            <Route path='/handle_create' element={<HandleCreate />} />
            <Route path='/application' element={<Application />} />



          </Routes>
        </div>
      </Router>
      </UserProvider>
    </>


  );
};

export default App;
