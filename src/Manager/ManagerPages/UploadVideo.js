/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from 'react'
import firedb from "../../firebase"
import { useNavigate } from "react-router-dom";
import ManagerHeader from '../managerComponents/ManagerHeader';

function UploadVideo() {
  var [Manager,setManager]= useState ()
 var [holder,setHolder]=  useState()
 var[data,setData]=useState()
  var[record,setRecord]=useState()

     function show()
     {
       firedb.child("Video").once("value",function(snapshot){
          setHolder(snapshot.val())
      })
     }

     function show1(){
      firedb.child("Data").child("-Oibg9KUQyakg5dY-r6p").once("value",function(snapshot){
          setManager(snapshot.val())}
     )}


     useEffect(function(){
         show()
         show1()
       },[])

const[user,setUser]= useState()

    function set(e)
   {
     setUser(e.target.value)
   }

useEffect(function(){
  if(holder) {
    check()
  }
},[holder])

 function check() {
    if (holder  && Manager && Manager.email) {
      const uploaders = Object.keys(holder).map(key => holder[key].uploader);
      setData(uploaders);
      const managerRecords = Object.keys(holder).filter(key => holder[key].uploader === Manager.email);
      setRecord(managerRecords);
    }
  }



console.log(record)


  function save(){
  
    if(record && record.length >= 2){ 
        alert("You have already uploaded 2 videos.")
    }else{

firedb.child("Video").push({
          ID:user,
          uploader:Manager.email,
          uploadedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
})
   show()
    }
  }
  
  var s={
                height:"200px",
                width:"300px"
              }

              function Del(key){
                firedb.child("Video").child(key).remove()
                show()
              }

  return (
    <div id='panelman'>
      <ManagerHeader/>
      <h2>Upload Video</h2>
      <input type='text' name='name'  placeholder="enter src" value={user} onChange={set}></input>
      <button onClick={save}>Upload</button>
 
  <div class="container">
        <table class="table table-bordered">
          <thead>
            <th>
              Videos
            </th>
            <th>
              Operation
            </th>
          </thead>
          <tbody>
             {
             
               holder? Object.keys(holder).map(function(key){
                    return(
                      <tr>

                          <td>
                           <iframe style={s} src={holder[key].ID}></iframe>
                          </td>
                          <td>
                            <button id='btng' onClick={() => Del(key) }>delete</button>
                          </td>
                      </tr>
                    )
                }):""
             }
          </tbody>
        </table>
      </div>    

    </div>
  )
}

export default UploadVideo;
