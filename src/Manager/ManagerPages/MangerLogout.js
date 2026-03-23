import React from 'react'
import Home from '../../User/userPages/Home'
import firedb from "../../firebase"

function MangerLogout() {

firedb.child("Data").child("-Oibg9KUQyakg5dY-r6p").update({email:""});
    
  return (
    <div>
      <Home/>
    </div>
  )
}

export default MangerLogout
