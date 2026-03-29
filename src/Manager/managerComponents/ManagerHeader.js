import React from "react";
import { Link } from "react-router-dom";
import "./ManagerHeader.css"

function ManagerHeader() {
  return (
    <nav id="head">

      {/* LOGO */}
      <div className="logo">
        <Link to="/Manager">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">Manager</span>
        </Link>
      </div>

      {/* MENU */}
      <div className="menu">
        <Link to="/Manager/gallery">UploadGallery</Link>
        <Link to="/Manager/video">UploadVideo</Link>
        <Link to="/Manager/news">Upload News</Link>
        <Link to="/Manager/logout" className="logout">Logout</Link>
      </div>

    </nav>
  );
}

export default ManagerHeader;