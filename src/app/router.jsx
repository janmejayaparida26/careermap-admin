import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import DashBoardlayout from "../components/layout/DashBoardlayout";
import MentorPage from "../features/mentor/MentorPage";
import AllUsers from "../features/allUser/index";
import ModulePage from "../features/modules/ModulePage";
import StreamPage from "../features/stream/StreamPage";
import CategoryPage from "../features/categories/CategoryPage";
import Category2Page from "../features/2ndcategories/Category2Page";
import SubCategoryPage from "../features/subcategories/SubCategoryPage";
import SalaryPage from "../features/salary/SalaryPage";
import JobScopePage from "../features/jobscope/JobScopePage";
import RequireAuth from "../features/auth/RequireAuth";
import PublicOnlyRoute from "../features/auth/PublicOnlyRoute";
import AuthLayout from "../features/auth/AuthLayout";
import LoginPage from "../features/auth/LoginPage";
import SignupPage from "../features/auth/SignupPage";
import ForgotPasswordPage from "../features/auth/ForgotPasswordPage";

export const router = createBrowserRouter([
  {
    element: <PublicOnlyRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: "/login", element: <LoginPage /> },
          { path: "/signup", element: <SignupPage /> },
          { path: "/forgot-password", element: <ForgotPasswordPage /> },
        ],
      },
    ],
  },
  {
    element: <RequireAuth />,
    children: [
      {
        path: "/",
        element: <DashBoardlayout />,
        children: [
          { index: true, element: <Navigate to="/dashboard" replace /> },
          { path: "dashboard", element: <DashboardPage /> },
          { path: "mentor", element: <MentorPage /> },
          { path: "all_users", element: <AllUsers /> },
          { path: "modules", element: <ModulePage /> },
          { path: "stream", element: <StreamPage /> },
          { path: "categories", element: <CategoryPage /> },
          { path: "2ndcategories", element: <Category2Page /> },
          { path: "subcategories", element: <SubCategoryPage /> },
          { path: "salary", element: <SalaryPage /> },
          { path: "jobscope", element: <JobScopePage /> },
        ],
      },
    ],
  },
]);
