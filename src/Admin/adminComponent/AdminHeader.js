import { Link } from "react-router-dom";

import React from 'react'

function AdminHeader() {
  return (
    <nav id="head">
      <Link to="/admin/Create">Create Manager</Link> |
        <Link to="/admin/list">Managers list</Link> |
        <Link to="/admin/dashboard">Videos Dashboard</Link> |
      <Link to="/admin/dashboard1">Images Dashboard</Link> |
      <Link to="/admin/showcontact">Show Contact</Link> |
      <Link to="/admin/password">Change Password</Link> |
      <Link to="/logout">Logout</Link>
    </nav>
  )
}

export default AdminHeader;

