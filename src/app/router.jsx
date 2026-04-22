import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import DashBoardlayout from "../components/layout/DashBoardlayout";
import MentorPage from "../features/mentor/MentorPage";
import ModulePage from "../features/modules/ModulePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoardlayout />,
    children: [ // ✅ FIXED (lowercase)
      { index: true, element: <Navigate to="/dashboard" /> },
      { path: "dashboard", element: <DashboardPage /> }, // ✅ no need for "/"
      {path:"mentor",element:<MentorPage/>},
      {path:"module",element:<ModulePage/>}
    ],
  },
]);