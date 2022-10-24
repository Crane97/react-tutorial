import logo from './logo.svg';
import './App.css';

import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';
import React, { useState } from 'react';

function App() {

  const[usersList, setUsersList] = useState([]); 

  const addUserHandler = (uName, uAge)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, {name: uName, age: uAge}]
    });
  }

  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <UsersList users= {usersList}/>
    </div>
  );
}

export default App;
