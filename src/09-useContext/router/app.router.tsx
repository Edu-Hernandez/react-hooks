
import { createBrowserRouter, Navigate } from "react-router";
import { AboutPage } from "../pages/about/AboutPage";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { LoginPage } from "../pages/auth/LoginPage";
import { PrivateRouter } from "./PrivateRouter";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage/>,
  },
  {
    path: "/profile",
    element: <PrivateRouter element={<ProfilePage/>} />,
  },
  {
    path: "/auth",
    element: <LoginPage/>,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  }
]);
