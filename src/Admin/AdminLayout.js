import {Outlet } from "react-router-dom";
import "./AdminLayout.css";
import AdminHeader from "./adminComponent/AdminHeader";

function AdminLayout() {
  return (
    <>
    <AdminHeader/>
     <Outlet />

    </>
          
        
  );
}

export default AdminLayout;