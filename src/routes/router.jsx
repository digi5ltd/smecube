import { createBrowserRouter } from "react-router-dom";

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

// Admin
import AdminPricing from "../pages/admin/dashboard/AdminPricing";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/admin/dashboard/AdminDashboard";
import AdminSettings from "../pages/admin/dashboard/AdminSettings";
import AdminWebdev from "../pages/admin/dashboard/AdminWebdev";
import AdminFacebookBoosting from "../pages/admin/dashboard/AdminFacebookBoosting";
import AdminEcommerceSolution from "../pages/admin/dashboard/AdminEcommerceSolution";
import IssueFixing from "../pages/services/IssueFixing";
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

// Blog Pages
import FacebookBoostingGuide from "../pages/blogPages/FacebookBoostingGuide";
import EcommerceSolutionBlog from "../pages/blogPages/EcommerceSolution";
import ResponsiveWebDesign from "../pages/blogPages/ResponsiveWebdesign";
import BusinessConsultingGuide from "../pages/blogPages/BusinessConsultingGuide";
import ChatbotSetupGuide from "../pages/blogPages/ChatbotSetupGuide";
import DigitalMarketingTrends from "../pages/blogPages/DigitalMarketingTrends";
import LandingPageStrategies from "../pages/blogPages/LandingPageStrategies";
import GraphicDesignBranding from "../pages/blogPages/GraphicDesignBranding";
import AdminDomain from "../pages/admin/dashboard/AdminDomainHost.jsx";

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
      { path: "tools", element: <Tools /> },
      { path: "pricing", element: <Pricing /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      // Blog Routes
      {
        path: "blogs/facebook-boosting-guide",
        element: <FacebookBoostingGuide />,
      },
      { path: "blogs/ecommerce-solution", element: <EcommerceSolutionBlog /> },
      { path: "blogs/responsive-web-design", element: <ResponsiveWebDesign /> },
      {
        path: "blogs/business-consulting-guide",
        element: <BusinessConsultingGuide />,
      },
      { path: "blogs/chatbot-setup-guide", element: <ChatbotSetupGuide /> },
      {
        path: "blogs/digital-marketing-trends",
        element: <DigitalMarketingTrends />,
      },
      {
        path: "blogs/landing-page-strategies",
        element: <LandingPageStrategies />,
      },
      {
        path: "blogs/graphic-design-branding",
        element: <GraphicDesignBranding />,
      },

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
    element: <AdminLayout />,
    children: [
      { path: "dashboard", element: <AdminDashboard /> },
      { path: "settings", element: <AdminSettings /> },
      { path: "pricing", element: <AdminPricing /> }, // ✅ ADDED THIS LINE
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
      { path: "domain-hosting", element: <AdminDomain /> },
    ],
  },
  {
    path: "client",
    element: <ClientLayout />,
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
