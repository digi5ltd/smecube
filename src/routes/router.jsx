import { createBrowserRouter } from "react-router";
import App from "../App";
import SMECubeLanding from "../pages/SMECubeLanding";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
        {
            index: true,
            Component: SMECubeLanding
        }
    ]
  },
]);