import React from 'react'
import firedb from "./firebase";
import Home from './User/userPages/Home';



function Temp() {
   firedb.child("Record").child("-OhdtWoe50nlhLZW8Ix_").update({status:0});
  return (
    <div>
      <Home/>
    </div>
  )
}

export default Temp
