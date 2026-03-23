/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from 'react'



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

  var s = {
    height: "400px",
    width: "600px",
    margin: "20px",
  }

  return (
    <div id='gallery'>
      <h2>Videos</h2>
      {

        holder ? Object.keys(holder).map(function (key) {
          return (

            <iframe style={s} src={holder[key].ID}></iframe>


          )
        }) : ""
      }

    </div>
  )
}

export default ShowVideo;
