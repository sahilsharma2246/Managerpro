import firedb from "../../firebase"
import React, { useEffect, useState } from 'react'
import "./Gallery.css"

function Gallery() {
  var [holder, setHolder] = useState()
  function show() {
    firedb.child("Gallery").once("value", function (snapshot) {
      setHolder(snapshot.val())
    })
  }
  useEffect(function () {
    show()
  },[]);

 


  return (
    <div id="gallery">
      <h2>Gallery</h2>
      {

        holder ? Object.keys(holder).map(function (key) {
          return (

            <img src={holder[key].image} alt={holder[key].name}></img>


          )
        }) : ""
      }
    </div>
  )
}

export default Gallery

