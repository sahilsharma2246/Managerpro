import firedb from "../../firebase"
import React, { useState } from 'react'
import {  useNavigate } from "react-router-dom";
import "./Contact.css"

function Contact() {
  let navigate=useNavigate();

  const[user,setUser]= useState({
    Name:"",
    Phone_no:"",
    Address:"",
   })
  
   function set(e)
   {
     setUser({...user,[e.target.name]:e.target.value})
   }
  
    function save()
    {
       firedb.child("contact").push(user)
       alert("Contact saved successfully")
       navigate("/")
    }
  return (
    <div id="contact1" >
      <div id="contact">
        <h2>Contact Info</h2>
      <input id="c1"  name="Name" placeholder="enter name" value={user.Name} onChange={set} required />
      <input id="c1"  name="Phone_no" placeholder="enter mobile no" value={user.Phone_no} type="number" onChange={set} required />
      <input id="c1"   name="Address" placeholder="enter address" value={user.Address} onChange={set} required />
      <button id="c2" onClick={save}>Submit</button>
      </div>
    </div>
  )
}

export default Contact;

