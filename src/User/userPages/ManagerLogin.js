/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react'
import firedb from "../../firebase"
import { useNavigate } from 'react-router-dom';
import "./Login.css"

function ManagerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [savedPasswords, setSavedPasswords] = useState({});
  const navigate = useNavigate();

  var [holder, setHolder] = useState({})

  function show() {
    firedb.child("Manager").once("value", function (snapshot) {
      setHolder(snapshot.val())
    })
  }
  useEffect(function () {
    show()
  })

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedPasswords')) || {};
    setSavedPasswords(saved);
  }, []);

  useEffect(() => {
    if (savedPasswords[email]) {
      setPassword(savedPasswords[email]);
    } else {
      setPassword(''); 
    }
  }, [email, savedPasswords]);

  function login() {
    Object.keys(holder).forEach(key => {
      if (holder[key].email == email && holder[key].password == password && holder[key].validity == "1") {
        alert("login success");
        firedb.child("Data").child("-Oibg9KUQyakg5dY-r6p").update({email:holder[key].email});   
        
        if (rememberMe) {
          const newSaved = {...savedPasswords, [email]: password};
          setSavedPasswords(newSaved);
          localStorage.setItem('savedPasswords', JSON.stringify(newSaved));
        }
        
        navigate("/Manager/gallery");
        return;
      }
      
    });
  }

  function set(e) {
    setEmail(e.target.value)
  }

  function set2(e) {
    setPassword(e.target.value)
  }

  function change() {
    navigate("/login")
  }

  return (
    <div id='tt'>
    

      <div id='login1'>
        <h2>Manager Login</h2>
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
        <label id='l1'>
          <input
          id='i7'
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            
          />
         <h5 id='h5'> Remember Me</h5>
        </label>
        <button id="b1" onClick={login}>Login</button>
        <h2>for Admin:-</h2>
        <button onClick={change} id="m1">click here</button>
      </div>
    </div>
  )
}

export default ManagerLogin