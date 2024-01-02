import './App.css';
import axios from "axios";
import React, { useState, useEffect } from "react";
import User from './User';

function App() {

  const [users, setUsers] = useState();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res =>  setUsers(res.data))
    .catch (err=> console.log (err))
  }, []);


  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
{users && users.map((user,index)=>
<User user={user} index={index } />
)}
      
  
    </div>
  );
}

export default App;
