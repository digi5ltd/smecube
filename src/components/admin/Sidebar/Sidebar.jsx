import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Settings,
  Table,
  Menu,
  X,
  RefreshCcw,
  LayoutDashboard,
} from "lucide-react";
import UserDropdown from "../Dropdowns/UserDropdown";

const Sidebar = () => {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const [expandedCategory, setExpandedCategory] = useState(null);
  const location = useLocation();

  // Navigation menu items
  const navMenu = [
    {
      path: "/admin/dashboard",
      name: "Dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    { path: "/admin/settings", name: "Settings", icon: <Settings size={18} /> },
    {
      // path: "/admin/update-services",
      name: "Update Services",
      icon: <RefreshCcw size={18} />,
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
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-gray-900 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        {/* Mobile Toggle */}
        <button
          className="cursor-pointer text-gray-200 opacity-70 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
          type="button"
          onClick={() => setCollapseShow("bg-gray-900 m-2 py-3 px-6")}
        >
          <Menu size={22} />
        </button>

        {/* Brand */}
        <NavLink
          className="md:block text-left md:pb-2 text-gray-800 mr-0 inline-block whitespace-nowrap text-lg uppercase font-bold p-4 px-0"
          to="/"
        >
          <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            sme
          </span>
          <span className="text-white">cube</span>
        </NavLink>

        {/* User Section (Mobile) */}
        <ul className="md:hidden items-center flex flex-wrap list-none gap-3">
          <li className="inline-block relative">
            <UserDropdown />
          </li>
        </ul>

        {/* Collapse Menu */}
        <div
          className={`md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ${collapseShow}`}
        >
          {/* Mobile Collapse Header */}
          <div className="md:min-w-full md:hidden block pb-2">
            <div className="flex flex-wrap justify-between items-center">
              <NavLink
                className="text-red-400 text-sm  uppercase font-bold"
                to="/"
              >
                SME <span className="text-gray-300">CUBE</span>
              </NavLink>
              <button
                type="button"
                className="cursor-pointer text-gray-300 opacity-70 md:hidden px-3 py-1 text-xl bg-transparent rounded"
                onClick={() => setCollapseShow("hidden")}
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* Divider */}
          <hr className="md:min-w-full text-red-600" />

          {/* Navigation */}
          <div className="md:flex-col md:min-w-full flex flex-col list-none space-y-1">
            {navMenu.map((item) => (
              <div key={item.name} className="items-center">
                <Link
                  to={item.path ? item.path : ""}
                  onClick={() =>
                    item.subcategories && toggleCategories(item.name)
                  }
                  className={`flex items-center gap-2 text-sm py-3 font-medium text-gray-300 hover:text-white ${
                    isActive(item.path) || isParentActive(item)
                      ? "text-white font-bold"
                      : ""
                  }`}
                >
                  {item.icon}
                  {item.name}

                  {item.subcategories && (
                    <svg
                      className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${
                        expandedCategory ? "rotate-90" : "rotate-0"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  )}
                </Link>
                {item.subcategories && expandedCategory === item.name && (
                  <div className="flex flex-col gap-2 ml-6 text-sm font-medium mb-2 text-gray-300 ">
                    {item.subcategories.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className={`${
                          isActive(sub.path)
                            ? "text-white font-bold"
                            : "hover:text-white"
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
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
