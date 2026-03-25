/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from 'react'

import "./Video.css"

import firedb from "../../firebase"

function ShowVideo() {
  var [holder, setHolder] = useState()
  
  function show() {
    firedb.child("Video").once("value", function (snapshot) {
      setHolder(snapshot.val())
    })
  }
  useEffect(function () {
    show()
  }, []);

 
  return (
    <div id='gallery'>
      <h2>Videos</h2>
       <div className="video-container">
    {
      holder ? Object.keys(holder).map((key) => (
        <div className="video-frame">
          <iframe src={holder[key].ID}></iframe>
        </div>
      )) : ""
    }
  </div>
    </div>
  )
}

export default ShowVideo;
