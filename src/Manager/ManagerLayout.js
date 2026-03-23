import { NavLink, Outlet } from "react-router-dom";
import "./ManagerLayout.css";

function ManagerLayout() {
  return (
    <div className="manager-layout">

      {/* SIDEBAR */}
      <aside className="manager-sidebar">
        <h2 className="logo">Manager Panel</h2>

        <nav>
          <NavLink to="/manager/news">News</NavLink>
          <NavLink to="/manager/gallery">Upload Gallery</NavLink>
          <NavLink to="/manager/contact">Upload Contact</NavLink>
          <NavLink to="/manager/video">Upload Video</NavLink>
          <NavLink to="/manager/logout">Logout</NavLink>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <div className="manager-main">
        <header className="manager-header">
          <h3>Welcome Manager</h3>
        </header>

        <div className="manager-content">
          <Outlet />
        </div>
      </div>

    </div>
  );
}

export default ManagerLayout;