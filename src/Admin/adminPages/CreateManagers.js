import React, { useState } from 'react'
import  firedb from "../../firebase"
import AdminHeader from '../adminComponent/AdminHeader'
import { useNavigate } from 'react-router-dom'

function CreateManagers() {

   var [path, setPath] = useState()

    let navigate = useNavigate();
  const[user,setUser]= useState({
    Image:"",
    email:"",
    password:"",
    validity:"0"
   })
  
    
   function set(e)
   {
     setUser({...user,[e.target.name]:e.target.value})
   }
     
     function set1(e) {
    var reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])

    reader.onload = function () {
      setPath(reader.result)
      setUser({ ...user, Image: path });
    }
  }
  
    function save()
    {
       firedb.child("Manager").push(user,)
       alert("user created successfully")
       navigate("/admin/showcontact")
    }
    
    return (
      <div id='paneladmin'>
        <AdminHeader/>
        <div id='login1'>
        <h2>Register</h2>
        
 <input id='i1' onChange={set1} type="file" />



          <input
          id='i1'
           name="email"
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={set}
            required
          />
          <input
          id='i1'
          name="password"
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={set}
            required
          />
          <button onClick={save} type="submit"
          id='b1'>Register</button>
       
      </div>
      </div>
    );
  };
  

export default CreateManagers
