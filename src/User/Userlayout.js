import { Outlet } from "react-router-dom";
import UserHeader from "../User/userComponent/UserHeader";
import "./Userlayout.css";

function UserLayout() {
  return (
    <div className="user-layout">
      <UserHeader />
      
      <main className="user-content">
        <Outlet />
      </main>
    </div>
  );
}

export default UserLayout;