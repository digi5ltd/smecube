import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from '../utils/protectedRoute';

// Main Pages
import SMECubeLanding from "../pages/SMECubeLanding";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Blogs from "../pages/Blogs"; 
import Tools from "../pages/Tools";
import Pricing from "../pages/Pricing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BlogDetail from "../pages/BlogDetail.jsx";
// Service Pages
import EcommerceSolution from "../pages/services/EcommerceSolution";
import DomainHostings from "../pages/services/DomainHostings";
import BrandPageSetup from "../pages/services/BrandPageSetup";
import BulkSMS from "../pages/services/BulkSMS";
import BusinessConsulting from "../pages/services/BusinessConsulting";
import ChatbotSetup from "../pages/services/ChatbotSetup";
import FacebookBoosting from "../pages/services/FacebookBoosting";
import WebDevelopment from "../pages/services/WebDevelopment";
import GraphicDesign from "../pages/services/GraphicDesign";
import LandingPage from "../pages/services/LandingPage";
import App from "../layouts/App";
import BusinessTraining from "../pages/services/BusinessTraining";
import IssueFixing from "../pages/services/IssueFixing";

// Admin
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import AdminPricing from "../pages/admin/dashboard/AdminPricing";
import AdminSettings from "../pages/admin/dashboard/AdminSettings";
import AdminBlogs from "../pages/admin/dashboard/AdminBlogs";
import AdminWebdev from "../pages/admin/dashboard/AdminWebdev";
import AdminFacebookBoosting from "../pages/admin/dashboard/AdminFacebookBoosting";
import AdminEcommerceSolution from "../pages/admin/dashboard/AdminEcommerceSolution";
import AdminChatbotSetup from "../pages/admin/dashboard/AdminChatbotSetup";
import AdminIssueFixing from "../pages/admin/dashboard/AdminIssueFixing";
import AdminBusinessTraining from "../pages/admin/dashboard/AdminBusinessTraining";
import AdminBulkSMS from "../pages/admin/dashboard/AdminBulkSMS";
import AdminLandingPage from "../pages/admin/dashboard/AdminLandinPage";
import AdminBusinessConsulting from "../pages/admin/dashboard/AdminBusinessConsulting";
import AdminBrandPageSetup from "../pages/admin/dashboard/AdminBrandPageSetup";
import AdminGraphicDesign from "../pages/admin/dashboard/AdminGraphicDesign";

// Client
import ClientLayout from "../layouts/ClientLayout";
import ClientDashboard from "../pages/clientUser/ClientDashboard";
import ServicesSubscriptions from "../pages/clientUser/ServicesSubscriptions";
import ClientTools from "../pages/clientUser/ClientTools";
import ProjectsCampaigns from "../pages/clientUser/ProjectsCampaigns";
import BillingPayments from "../pages/clientUser/BillingPayments";
import NotificationsAlerts from "../pages/clientUser/NotificationsAlerts";
import SupportHelpDesk from "../pages/clientUser/SupportHelpDesk.jsx";
import AccountProfileSettings from "../pages/clientUser/AccountProfileSettings";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <SMECubeLanding /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "services", element: <Services /> },
      { path: "blogs", element: <Blogs /> },
      // ADD THIS - it will catch ALL blog slugs dynamically
      { path: "blogs/:slug", element: <BlogDetail /> },
      { path: "tools", element: <Tools /> },
      { path: "pricing", element: <Pricing /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },


      // Service Routes
      { path: "services/brand-page-setup", element: <BrandPageSetup /> },
      { path: "services/web-development", element: <WebDevelopment /> },
      { path: "services/bulk-sms", element: <BulkSMS /> },
      { path: "services/business-consulting", element: <BusinessConsulting /> },
      { path: "services/chatbot-setup", element: <ChatbotSetup /> },
      { path: "services/ecommerce-solution", element: <EcommerceSolution /> },
      { path: "services/facebook-boosting", element: <FacebookBoosting /> },
      { path: "services/graphic-design", element: <GraphicDesign /> },
      { path: "services/landing-page", element: <LandingPage /> },
      { path: "services/hosting", element: <DomainHostings /> },
      { path: "services/issue-fixing", element: <IssueFixing /> },
      { path: "services/business-training", element: <BusinessTraining /> },
    ],
  },
  {
    path: "admin",
    element: (
      <ProtectedRoute requiredRole="admin">
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "pricing", element: <AdminPricing /> },
      { path: "blogs", element: <AdminBlogs /> },
      { path: "settings", element: <AdminSettings /> },
      { path: "web-development", element: <AdminWebdev /> },
      { path: "bulk-sms", element: <AdminBulkSMS /> },
      { path: "landing-page", element: <AdminLandingPage /> },
      { path: "facebook-boosting", element: <AdminFacebookBoosting /> },
      { path: "ecommerce-solution", element: <AdminEcommerceSolution /> },
      { path: "chatbot-setup", element: <AdminChatbotSetup /> },
      { path: "issue-fixing", element: <AdminIssueFixing /> },
      { path: "business-training", element: <AdminBusinessTraining /> },
      { path: "business-consulting", element: <AdminBusinessConsulting /> },
      { path: "brand-page-setup", element: <AdminBrandPageSetup /> },
      { path: "graphic-design", element: <AdminGraphicDesign /> },
    ],
  },
  {
    path: "client",
    element: (
      <ProtectedRoute requiredRole="client">
        <ClientLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "dashboard", element: <ClientDashboard /> },
      { path: "services-subscriptions", element: <ServicesSubscriptions /> },
      { path: "tools", element: <ClientTools /> },
      { path: "projects-campaigns", element: <ProjectsCampaigns /> },
      { path: "billing-payments", element: <BillingPayments /> },
      { path: "notifications-alerts", element: <NotificationsAlerts /> },
      { path: "support-helpdesk", element: <SupportHelpDesk /> },
      { path: "account-profile", element: <AccountProfileSettings /> },
    ],
  },
]);