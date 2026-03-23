import { Outlet } from "react-router-dom";
import UserHeader from "../User/userComponent/UserHeader";
import "./Userlayout.css";

function UserLayout() {
  return (
    <>
      <UserHeader />
      <Outlet />
    </>
  );
}

export default UserLayout;