import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

// SVG Icons
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const DashboardIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const DollarIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const BlogIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
  </svg>
);

const RefreshIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ChevronRightIcon = ({ className = "" }) => (
  <svg className={`w-4 h-4 transition-transform duration-200 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const Sidebar = () => {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const location = useLocation();

  // Navigation menu items
  const navMenu = [
    {
      path: "/admin/dashboard",
      name: "Dashboard",
      icon: <DashboardIcon />,
    },
    { 
      path: "/admin/pricing", 
      name: "Pricing", 
      icon: <DollarIcon /> 
    },
    {
      path: "/admin/blogs",
      name: "Blogs",
      icon: <BlogIcon />,
    },
    {
      name: "Update Services",
      icon: <RefreshIcon />,
      subcategories: [
        { path: "/admin/facebook-boosting", name: "Facebook Boosting" },
        { path: "/admin/ecommerce-solution", name: "Ecommerce Solution" },
        { path: "/admin/web-development", name: "Develop Website" },
        { path: "/admin/landing-page", name: "Landing Page" },
        { path: "/admin/bulk-sms", name: "Bulk SMS" },
        { path: "/admin/business-consulting", name: "Business Consulting" },
        { path: "/admin/brand-page-setup", name: "Brand Page Setup" },
        { path: "/admin/graphic-design", name: "Graphic Design" },
        { path: "/admin/chatbot-setup", name: "Chatbot Setup" },
        { path: "/admin/issue-fixing", name: "Issue Fixing" },
        { path: "/admin/business-training", name: "Business Training" },
      ],
    },
    { 
      path: "/admin/settings", 
      name: "Settings", 
      icon: <SettingsIcon /> 
    },
  ];

  const toggleCategories = (name) => {
    setExpandedCategory(expandedCategory === name ? null : name);
  };

  const isActive = (path) => location.pathname === path;

  const isParentActive = (item) => {
    if (item.subcategories) {
      return item.subcategories.some((sub) => sub.path === location.pathname);
    }
    return false;
  };

  return (
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-2xl bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-4">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        {/* Mobile Toggle */}
        <button
          className="cursor-pointer text-white md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          type="button"
          onClick={() => setCollapseShow("bg-gray-900 m-2 py-3 px-4")}
        >
          <MenuIcon />
        </button>

        {/* Brand */}
        <NavLink
          className="md:block text-center md:pb-4 mr-0 inline-block whitespace-nowrap p-4 px-0"
          to="/"
        >
          <div className="flex items-center justify-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center shadow-lg shadow-pink-500/50">
              <span className="text-white font-black text-lg">S</span>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-black">
                <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                  SME
                </span>
                <span className="text-white">CUBE</span>
              </h1>
              <p className="text-xs text-gray-400">Admin Panel</p>
            </div>
          </div>
        </NavLink>

        {/* User Section (Mobile) */}
        <ul className="md:hidden items-center flex flex-wrap list-none">
          <li className="inline-block relative">
            <button className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
              <img
                src="/assets/img/team-1-800x800.jpg"
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-gray-700"
              />
            </button>
          </li>
        </ul>

        {/* Collapse Menu */}
        <div
          className={`md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ${collapseShow}`}
        >
          {/* Mobile Collapse Header */}
          <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-gray-700">
            <div className="flex flex-wrap justify-between items-center">
              <NavLink className="flex items-center gap-2" to="/">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-white font-bold">SMECUBE</span>
              </NavLink>
              <button
                type="button"
                className="cursor-pointer text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
                onClick={() => setCollapseShow("hidden")}
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:flex-col md:min-w-full flex flex-col list-none space-y-1 flex-1">
            {navMenu.map((item) => (
              <div key={item.name} className="items-center">
                <Link
                  to={item.path ? item.path : ""}
                  onClick={() =>
                    item.subcategories && toggleCategories(item.name)
                  }
                  className={`flex items-center gap-3 text-sm py-3 px-4 font-medium rounded-xl transition-all duration-200 ${
                    isActive(item.path) || isParentActive(item)
                      ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-pink-500/50"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <span className={isActive(item.path) || isParentActive(item) ? "scale-110" : ""}>
                    {item.icon}
                  </span>
                  <span className="flex-1">{item.name}</span>

                  {item.subcategories && (
                    <ChevronRightIcon 
                      className={expandedCategory === item.name ? "rotate-90" : ""}
                    />
                  )}
                </Link>
                
                {item.subcategories && expandedCategory === item.name && (
                  <div className="flex flex-col gap-1 ml-4 mt-2 pl-4 border-l-2 border-gray-700">
                    {item.subcategories.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className={`text-sm py-2 px-3 rounded-lg transition-colors ${
                          isActive(sub.path)
                            ? "text-pink-400 font-semibold bg-gray-800"
                            : "text-gray-400 hover:text-white hover:bg-gray-800"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* User Profile at Bottom */}
          <div className="hidden md:block mt-auto pt-4 border-t border-gray-700">
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <img
                  src="/assets/img/team-1-800x800.jpg"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-gray-700"
                />
                <div className="flex-1 text-left">
                  <p className="text-sm font-semibold text-white">Admin User</p>
                  <p className="text-xs text-gray-400">admin@smecube.com</p>
                </div>
              </button>

              {userDropdownOpen && (
                <div className="absolute bottom-full left-0 right-0 mb-2 bg-gray-800 rounded-xl shadow-xl border border-gray-700 overflow-hidden">
                  <button className="w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:bg-gray-700 transition-colors">
                    Profile
                  </button>
                  <button className="w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:bg-gray-700 transition-colors">
                    Settings
                  </button>
                  <div className="border-t border-gray-700"></div>
                  <button className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:bg-gray-700 transition-colors">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;