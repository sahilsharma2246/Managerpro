import { Outlet } from "react-router-dom";
import "./ManagerLayout.css";
import ManagerHeader from "./managerComponents/ManagerHeader";


function ManagerLayout() {
  return (
    <div className="manager-layout">
      <ManagerHeader />   
      
      <main className="manager-content">
        <Outlet />
      </main>
    </div>
  );
}

export default ManagerLayout;