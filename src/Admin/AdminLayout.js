import {Outlet } from "react-router-dom";
import "./AdminLayout.css";
import AdminHeader from "./adminComponent/AdminHeader";

function AdminLayout() {
  return (
    <>
      <AdminHeader />
      <main>
        <div className="page-container">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default AdminLayout;