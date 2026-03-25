import React, { useState } from 'react'
import "./change.css"
import firedb from "../../firebase"
import { useNavigate } from 'react-router-dom';

function ChangePassword() {
  const navigate = useNavigate();
     
        firedb.child("Record").once("value", function (snapshot) {
          const data = snapshot.val();
          
          
          
          // eslint-disable-next-line eqeqeq
          if (data["-OhdtWoe50nlhLZW8Ix_"].status == 0) {
            alert("login first")
                navigate("/login")
          } 
        });
  

const [Password, setPassword] = useState('');


const change  = () => {
  firedb.child("Record").child("-OhdtWoe50nlhLZW8Ix_").update({password:Password});

  alert("password changed successfully")
  navigate("/admin/gallery")
}
function set(e)
    {
      setPassword(e.target.value)
    }
  return (
    <div id='paneladmin'>
 

  <div className="change-card">
    <h2>Change Password</h2>

    <input 
      type="password" 
      placeholder="Enter new password"
      onChange={set} 
      required 
    />

    <button onClick={change}>Change Password</button>
  </div>
</div>
  )
}

export default ChangePassword;

