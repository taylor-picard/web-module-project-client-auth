import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Login from './components/login';
import FriendsList from './components/friendsList';
import AddFriends from './components/addFriends';


function App() {
  return (
    <div className='App'>
     
      <Routes>
        <Route exact path='/'>
          <Login/>
        </Route>

        <Route exact path='/login'> 
          <Login/>
        </Route>

        <Route exact path='/friends'> 
          <FriendsList/>
        </Route>

        <Route exact path='/friends/add'>
          <AddFriends/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
