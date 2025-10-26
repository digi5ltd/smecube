// src/pages/admin/AdminLayout.jsx
import { NavLink, Outlet } from "react-router-dom";
import {
  LogOut,
  LayoutDashboard,
  Users,
  FileText,
  Settings,
} from "lucide-react";
import AdminNavbar from "../components/admin/Navbars/AdminNavbar";
import Sidebar from "../components/admin/Sidebar/Sidebar";
import HeaderStats from "../components/admin/Headers/HeaderStats";
import ScrollToTop from "../utils/ScrollToTop";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";

const AdminLayout = () => {
  //   const { logout, user } = useContext(AuthContext);

  const navItems = [
    { to: "/admin", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { to: "/admin/users", label: "Users", icon: <Users size={18} /> },
    { to: "/admin/blogs", label: "Blogs", icon: <FileText size={18} /> },
    { to: "/admin/settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <>
      <ScrollToTop />
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        {/* Header */}
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
