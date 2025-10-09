import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SMECubeLanding from "../pages/SMECubeLanding";
import BrandPageSetup from "../pages/services/BrandPageSetup";
import BulkSMS from "../pages/services/BulkSMS";
import BusinessConsulting from "../pages/services/BusinessConsulting";
import ChatbotSetup from "../pages/services/ChatbotSetup";
import EcommerceSolution from "../pages/services/EcommerceSolution";
import FacebookBoosting from "../pages/services/FacebookBoosting";
import GraphicDesign from "../pages/services/GraphicDesign";
import LandingPage from "../pages/services/LandingPage";
import WebDevelopment from "../pages/services/WebDevelopment";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: SMECubeLanding
      },
      {
        path: "/services/brand-page-setup",
        Component: BrandPageSetup
      },
      {
        path: "/services/bulk-sms",
        Component: BulkSMS
      },
      {
        path: "/services/business-consulting",
        Component: BusinessConsulting
      },
      {
        path: "/services/chatbot-setup",
        Component: ChatbotSetup
      },
      {
        path: "/services/ecommerce-solution",
        Component: EcommerceSolution
      },
      {
        path: "/services/facebook-boosting",
        Component: FacebookBoosting
      },
      {
        path: "/services/graphic-design",
        Component: GraphicDesign
      },
      {
        path: "/services/landing-page",
        Component: LandingPage
      },
      {
        path: "/services/web-development",
        Component: WebDevelopment
      }
    ]
  }
]);
