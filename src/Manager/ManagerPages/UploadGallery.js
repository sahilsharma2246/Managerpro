/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import firedb from "../../firebase"
import ManagerHeader from "../managerComponents/ManagerHeader";

function UploadGallery() {
  var [path, setPath] = useState()
  var [holder,setHolder]=  useState()
  var [Manager,setManager]= useState ()
  // eslint-disable-next-line no-unused-vars
  var[data,setData]=useState()
  var[record,setRecord]=useState()


   function show()
   {
     firedb.child("Gallery").once("value",function(snapshot){
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



  function set(e) {
    var reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])

    reader.onload = function () {
      setPath(reader.result)
    }
  }


useEffect(function(){
  if(holder) {
    check()
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[holder])

 function check() {
    if (holder && Manager && Manager.email) {
      const uploaders = Object.keys(holder).map(key => holder[key].uploader);
      setData(uploaders);
      const managerRecords = Object.keys(holder).filter(key => holder[key].uploader === Manager.email);
      setRecord(managerRecords);
    }
  }



function upload() {
  if (record && record.length >= 2) {
    alert("You have already uploaded 2 images.");
  } else {
    firedb.child("Gallery").push({
      image: path,
      uploader: Manager.email,
      uploadedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    })
    show()
  }
}

 

 var s={
                height:"100px",
                width:"100px"
              }

function Del(key){
  firedb.child("Gallery").child(key).remove()
  show()
}

  return (
    <div id='panelman'>
      <ManagerHeader />
      <div id='u1'>
        
      <h2>Upload Gallery</h2>
      <input onChange={set} type="file" />
      <button id='b3' onClick={upload}>Upload</button>
      <br />
      <br />
      <br />
      </div>
      <div class="container">
        <table class="table table-bordered">
          <thead>
            <th>
              Images
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
                           <img  style={s} src={holder[key].image}></img>
                          </td>
                          <td>
                            <button id='btng' onClick={() => Del(key) } >delete</button>
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

export default UploadGallery

