/* eslint-disable eqeqeq */
import React from 'react'
import AdminHeader from '../adminComponent/AdminHeader'
import firedb from "../../firebase"
import { useNavigate } from "react-router-dom";

function UploadContact() {
  const navigate = useNavigate();
   
      firedb.child("Record").once("value", function (snapshot) {
        const data = snapshot.val();
        
        
        if (data["-OhdtWoe50nlhLZW8Ix_"].status == 0) {
          alert("login first")
              navigate("/login")
          
        }
      });
  return (
    <div >
      <AdminHeader/>
      <h2>Upload Contact</h2>
    </div>
  )
}

export default UploadContact
