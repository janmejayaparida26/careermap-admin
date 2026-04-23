import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import DashBoardlayout from "../components/layout/DashBoardlayout";
import MentorPage from "../features/mentor/MentorPage";
import AllUsers from "../features/allUser/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoardlayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "mentor", element: <MentorPage /> },
      { path: "all_users", element: <AllUsers /> },
    ],
  },
]);