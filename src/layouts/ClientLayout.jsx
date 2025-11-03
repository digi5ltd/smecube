import { Outlet, Link, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Add this import
import { useState } from "react";

function ClientLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/client/dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3M6 6h12" },
    { name: "Services", path: "/client/services-subscriptions", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
    { name: "Tools", path: "/client/tools", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { name: "Projects", path: "/client/projects-campaigns", icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" },
    { name: "Billing", path: "/client/billing-payments", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
    { name: "Notifications", path: "/client/notifications-alerts", icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" },
    { name: "Support", path: "/client/support-helpdesk", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5v-4a2 2 0 012-2h10a2 2 0 012 2v4h-4m-6 0h6" },
    { name: "Account", path: "/client/account-profile", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  ];

  return (
    <HelmetProvider> {/* Add HelmetProvider wrapper */}
      <div className="flex h-screen bg-gray-50 font-sans">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-20`}
        >
          <div className="p-6 bg-gradient-to-b from-blue-700 to-blue-900 text-white">
            <h2 className="text-xl font-bold font-normal">Client Hub</h2>
          </div>
          <nav className="mt-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center py-3 px-6 text-gray-700 font-medium font-normal hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ${
                      location.pathname === item.path ? "bg-blue-100 text-blue-600" : ""
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={sidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
              <div className="hidden md:block"></div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">Welcome, User</span>
                <button className="text-blue-600 hover:text-blue-700 font-medium">Logout</button>
              </div>
            </div>
          </header>
          <main className="container mx-auto px-6 py-8">
            <Outlet />
          </main>
        </div>

        {/* Overlay for Mobile Sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-10"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
      </div>
    </HelmetProvider>
  );
}

export default ClientLayout;