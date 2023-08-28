import React from 'react';
import './App.css';
import { Routes, Route, Link} from 'react-router-dom';
import Login from './components/login';
import FriendsList from './components/friendsList';
import AddFriends from './components/addFriends';
import Logout from './components/logout';
import PrivateRoute from './components/privateRoutes';


function App() {
  return (
    <div className='App'>
      <header>
        <h2>FRIENDS DATABASE</h2>
        <nav>
          <Link className='link' to='/'>LOGIN.</Link>
          <Link className='link' to='/friends'>FRIENDLIST.</Link>
          <Link className='link' to='/friends/add'>ADDFRIEND.</Link>
          <Link className='link' to='/logout'>LOGOUT</Link>
        </nav>
      </header>
     
      <Routes>
        <Route path='/' element={<Login/>}/>
  
        <Route path='/login' element={<Login/>}/> 

        <Route path='/friends' element={
          <PrivateRoute>
            <FriendsList/>
          </PrivateRoute>
        }/> 

        <Route path='/friends/add' element={
          <PrivateRoute>
            <AddFriends/>
          </PrivateRoute>
        }/>

        <Route path='/logout' element={
          <PrivateRoute>
            <Logout/>
          </PrivateRoute>
        }/>
      </Routes>
      
    </div>
  );
}

export default App;
