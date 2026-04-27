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
import PathTypePage from "../features/pathtype/PathTypePage";
import CareerPathPage from "../features/careerpath/CareerPathPage";
import EntranceExamPage from "../features/entranceexam/EntranceExamPage";
import InstitutionPage from "../features/institution/InstitutionPage";
import ScholarshipPage from "../features/scholarship/ScholarshipPage";
import CareerPlanPage from "../features/careerplan/CareerPlanPage";
import BookingTable from "../features/bookings/BookingTable";
import PlansPage from "../features/plans/PlansPage";
import ServicesPage from "../features/services/ServicesPage";
import CountriesPage from "../features/allcountries/CountriesPage";
import StatesPage from "../features/states/StatesPage";
import DistrictsPage from "../features/districts/DistrictsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoardlayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "mentor", element: <MentorPage /> },
      { path: "all_users", element: <AllUsers /> },
      { path: "dashboard", element: <DashboardPage /> }, // ✅ no need for "/"
      {path:"mentor",element:<MentorPage/>},
      {path:"modules",element:<ModulePage/>},
      {path:"stream",element:<StreamPage/>},
      {path:"categories",element:<CategoryPage/>},
      {path:"2ndcategories",element:<Category2Page/>},
      {path:"subcategories",element:<SubCategoryPage/>},
      {path:"salary",element:<SalaryPage/>},
      {path:"jobscope",element:<JobScopePage/>},
      {path:"pathtype",element:<PathTypePage/>},
      {path:"careerpath",element:<CareerPathPage/>},
      {path:"entranceexam",element:<EntranceExamPage/>},
      {path:"institution",element:<InstitutionPage/>},
      {path:"scholarship",element:<ScholarshipPage/>},
      {path:"careerplan",element:<CareerPlanPage/>},
      {path:"bookings",element:<BookingTable/>},
      {path:"plans",element:<PlansPage/>},
      {path:"services",element:<ServicesPage/>},
      {path:"allcountries",element:<CountriesPage/>},
      {path:"states",element:<StatesPage/>},
      {path:"districts",element:<DistrictsPage/>}
    ],
  },
]);