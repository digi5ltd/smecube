// File: src/routes/router.jsx
import { createBrowserRouter } from "react-router-dom";

// Main Pages
import SMECubeLanding from "../pages/SMECubeLanding";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Pricing from "../pages/Pricing";
import Login from "../pages/Login";
import Register from "../pages/Register";

// Service Pages
import BrandPageSetup from "../pages/services/BrandPageSetup";
import BulkSMS from "../pages/services/BulkSMS";
import BusinessConsulting from "../pages/services/BusinessConsulting";
import ChatbotSetup from "../pages/services/ChatbotSetup";
import EcommerceSolution from "../pages/services/EcommerceSolution";
import FacebookBoosting from "../pages/services/FacebookBoosting";
import GraphicDesign from "../pages/services/GraphicDesign";
import LandingPage from "../pages/services/LandingPage";
import WebDevelopment from "../pages/services/WebDevelopment";
import App from "../layouts/App";
import BusinessTraining from "../pages/services/BusinessTraining";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <SMECubeLanding />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      // Service Routes
      {
        path: "services/brand-page-setup",
        element: <BrandPageSetup />,
      },
      {
        path: "services/bulk-sms",
        element: <BulkSMS />,
      },
      {
        path: "services/business-consulting",
        element: <BusinessConsulting />,
      },
      {
        path: "services/chatbot-setup",
        element: <ChatbotSetup />,
      },
      {
        path: "services/ecommerce-solution",
        element: <EcommerceSolution />,
      },
      {
        path: "services/facebook-boosting",
        element: <FacebookBoosting />,
      },
      {
        path: "services/graphic-design",
        element: <GraphicDesign />,
      },
      {
        path: "services/landing-page",
        element: <LandingPage />,
      },
      {
        path: "services/web-development",
        element: <WebDevelopment />,
      },
      {
        path: "services/business-training",
        element: <BusinessTraining />,
      },
    ],
  },
]);
