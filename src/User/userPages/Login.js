/* eslint-disable eqeqeq */

import firedb from "../../firebase";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = () => {
    firedb.child("Record").once("value", function (snapshot) {
      const data = snapshot.val();
    
      
      
      if (data["-OhdtWoe50nlhLZW8Ix_"].email == email && data["-OhdtWoe50nlhLZW8Ix_"].password == password) {
        
        firedb.child("Record").child("-OhdtWoe50nlhLZW8Ix_").update({status:1});
        navigate('/admin/showcontact'); 
      }
      
       else {
        alert('Invalid email or password');
      }
    });
  };

    function set(e)
    {
      setEmail(e.target.value)
    }

    function set2(e)
    {
      setPassword(e.target.value)
    }
    function change(){
      navigate("/Manager")
    }
  return (
    <div id="tt">

      <div id="login1">
        <h2>Admin Login</h2>
        <input 
          id="i1" 
          placeholder="Email" 
          value={email} 
          onChange={set} 
        />
        <input 
          id="i1" 
          type="password" 
          placeholder="password" 
          value={password} 
          onChange={set2} 
        />
        <button id="b1" onClick={login}>Login</button>
        <h2>for mangers:-</h2>
        <button onClick={change} id="m1">click here</button>
      </div>
    </div>
  );
}

export default Login;