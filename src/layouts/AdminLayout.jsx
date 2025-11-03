import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; 
import Sidebar from "../components/admin/Sidebar/Sidebar";
import ScrollToTop from "../utils/ScrollToTop";

const AdminLayout = () => {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-50 min-h-screen">
        {/* No Header/Navbar here anymore */}
        <Outlet />
      </div>
    </HelmetProvider>
  );
};

export default AdminLayout;