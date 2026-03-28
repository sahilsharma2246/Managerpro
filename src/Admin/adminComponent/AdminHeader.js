import { Link } from "react-router-dom";
import "./AdminHeader.css"
import React from 'react'

function AdminHeader() {
  return (
    <nav>
      <div className="logo">Admin Panel</div>

      <div className="nav-links">
        <Link to="/admin/Create">Create Manager</Link>
        <Link to="/admin/list">Managers list</Link>
        <Link to="/admin/dashboard">Videos Dashboard</Link>
        <Link to="/admin/dashboard1">Images Dashboard</Link>
        <Link to="/admin/showcontact">Show Contact</Link>
        <Link to="/admin/password">Change Password</Link>
      </div>

      <div className="logout">
        <Link to="/admin/logout">Logout</Link>
      </div>
    </nav>
  );
}

export default AdminHeader;

