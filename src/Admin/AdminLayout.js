import { NavLink, Outlet } from "react-router-dom";
import "./AdminLayout.css";

function AdminLayout() {
  return (
    <div className="admin-layout">

      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <h2 className="logo">Admin Panel</h2>

        <nav>
          <NavLink to="/admin/dashboard">Dashboard</NavLink>
          <NavLink to="/admin/dashboard1">Main Dashboard</NavLink>
          <NavLink to="/admin/create">Create Manager</NavLink>
          <NavLink to="/admin/list">Manager List</NavLink>
          <NavLink to="/admin/showcontact">Contacts</NavLink>
          <NavLink to="/admin/password">Change Password</NavLink>
          <NavLink to="/admin/logout">Logout</NavLink>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <div className="admin-main">
        <header className="admin-header">
          <h3>Welcome Admin</h3>
        </header>

        <div className="admin-content">
          <Outlet />
        </div>
      </div>

    </div>
  );
}

export default AdminLayout;