import { NavLink } from "react-router-dom";
import "./UserHeader.css";

export default function UserHeader() {
  return (
    <nav id="head">
      {/* LOGO */}
      <div className="logo">
        <NavLink to="/">
          <span className="logo-icon">⚙️</span>
          <span className="logo-text">MyPanel</span>
        </NavLink>
      </div>

      {/* MENU */}
      <div className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/video">Video</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
}