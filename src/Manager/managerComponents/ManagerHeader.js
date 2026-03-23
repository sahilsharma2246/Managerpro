import React from 'react'
import { Link } from "react-router-dom";

function ManagerHeader() {
  return (
    <nav id="head">
      <Link to="/Manager/gallery">UploadGallery</Link> |
      <Link to="/Manager/video">UploadVideo</Link> |
      <Link to="/Manager/news">Upload News</Link> |
      <Link to="/Manager/logout">Logout</Link>
    </nav>
  )
}

export default ManagerHeader
