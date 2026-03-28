import { useNavigate } from "react-router-dom";
import firedb from "../../firebase"
import"./Contact.css"
import React, { useEffect, useState } from 'react'

function ShowContact() {

  var [Contact, setContact] = useState()


  function show() {
    firedb.child("contact").once("value", function (snapshot) {
      setContact(snapshot.val())
    })
  }
  useEffect(function () {
    show()
  })




  const navigate = useNavigate();

  firedb.child("Record").once("value", function (snapshot) {
    const data = snapshot.val();


    // eslint-disable-next-line eqeqeq
    if (data["-OhdtWoe50nlhLZW8Ix_"].status == 0) {
      alert("login first")
      navigate("/login")

    }
  });
  
  function Del(key){
    firedb.child("contact").child(key).remove()
    
  }

  return (
    <div>
     <h1>Contact Messages</h1>
      <div class="container">
        <table class="table table-bordered">
          <thead>
            <th>S.No</th>
            <th>Name</th>
            <th>Phone_no</th>
            <th>Address</th>
            <th>Operation</th>
          </thead>
          <tbody>
            {

              Contact ? Object.keys(Contact).map(function (key, index) {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{Contact[key].Name}</td>
                    <td>{Contact[key].Phone_no}</td>
                    <td>{Contact[key].Address}</td>
                    <td><button id='btng' onClick={() =>Del(key)}>delete</button></td>
                  </tr>
                )
              }) : ""
            }
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default ShowContact;

