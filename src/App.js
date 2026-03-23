import { BrowserRouter, Routes, Route } from "react-router-dom";

/* USER */
import Home from "./User/userPages/Home";
import About from "./User/userPages/About";
import Gallery from "./User/userPages/Gallery";
import Contact from "./User/userPages/Contact";
import Login from "./User/userPages/Login";
import ShowVideo from "./User/userPages/ShowVideo";
import ManagerLogin from "./User/userPages/ManagerLogin";

/* ADMIN */
import UploadContact from "./Admin/adminPages/UploadContact";
import ShowContact from "./Admin/adminPages/ShowContact";
import ChangePassword from "./Admin/adminPages/ChangePassword";
import Logout from "./Admin/adminPages/Logout";
import CreateManagers from "./Admin/adminPages/CreateManagers";
import List from "./Admin/adminPages/List";
import Dashboard from "./Admin/adminPages/Dashboard";
import Videodashboard from "./Admin/adminPages/Videodashboard";

/* MANAGER */
import UploadGallery from "./Manager/ManagerPages/UploadGallery";
import UploadVideo from "./Manager/ManagerPages/UploadVideo";
import MangerLogout from "./Manager/ManagerPages/MangerLogout";
import News from "./Manager/ManagerPages/News";


/* LAYOUTS */
import UserLayout from "./User/Userlayout";
import AdminLayout from "./Admin/AdminLayout";
import ManagerLayout from "./Manager/ManagerLayout";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= USER ================= */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="video" element={<ShowVideo />} />
          <Route path="login" element={<Login />} />
          <Route path="manager" element={<ManagerLogin />} />
        </Route>

        {/* ================= ADMIN ================= */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="create" element={<CreateManagers />} />
          <Route path="list" element={<List />} />
          <Route path="dashboard" element={<Videodashboard />} />
          <Route path="dashboard1" element={<Dashboard />} />
          <Route path="showcontact" element={<ShowContact />} />
          <Route path="password" element={<ChangePassword />} />
          <Route path="logout" element={<Logout />} />
        </Route>

        {/* ================= MANAGER ================= */}
        <Route path="/manager" element={<ManagerLayout />}>
          <Route path="news" element={<News />} />
          <Route path="gallery" element={<UploadGallery />} />
          <Route path="contact" element={<UploadContact />} />
          <Route path="video" element={<UploadVideo />} />
          <Route path="logout" element={<MangerLogout />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;