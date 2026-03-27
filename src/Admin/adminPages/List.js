import React, { useEffect, useState } from 'react'
import firedb from "../../firebase"
import { useNavigate } from 'react-router-dom'
import "./List.css"

function List() {
    var [manager, setManager] = useState()


  function show() {
    firedb.child("Manager").once("value", function (snapshot) {
      setManager(snapshot.val())
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
  function EN(key){
   firedb.child("Manager").child(key).update({validity:1});
  }
  function DS(key){
firedb.child("Manager").child(key).update({validity:0});
  }


  return (
    <div>
       
        <h1>Managers</h1>
        <div class="container">
        <table class="table table-bordered">
          <thead>
            <th>S.No</th>
            <th>Image</th>
            <th>Email</th>
            <th>Password</th>
            <th>Operation</th>
          </thead>
          <tbody>
            {

              manager ? Object.keys(manager).map(function (key, index) {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td><img src={manager[key].Image} alt=''></img></td>
                    <td>{manager[key].email}</td>
                    <td>{manager[key].password}</td>
                    <td>
                  {manager[key].validity === 1 ? (
                      <button id='btng' onClick={() => DS(key)}>disable</button>
                    ) : (
                      <button id='btnge' onClick={() => EN(key)}>enable</button>
                    )}
                      
                     </td>
                  </tr>
                )
              }) : ""
            }
          </tbody>
        </table>
      </div>

      
    </div>
  )
}

export default List
