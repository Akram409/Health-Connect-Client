import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp/SignUp";
import Profile from "../Share/Profile/Profile";
import Dashboard from "../Page/Dashboard/Dashboard";
import Appointment from "../Page/Appointment/Appointment";
import Services from "../Page/Services/Services";
import HealthData from "../Page/HealthData/HealthData";
import Report from "../Page/Report/Report";
import Bills from "../Page/Bills/Bills";
import CaloriesIntake from "../Page/CaloriesIntake/CaloriesIntake";
import Immunisation from "../Page/Immunisation/Immunisation";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/healthData",
        element: <HealthData />,
      },
      {
        path: "/report",
        element: <Report />,
      },
      {
        path: "/bills",
        element: <Bills />,
      },
      {
        path: "/caloriesIntake",
        element: <CaloriesIntake />,
      },
      {
        path: "/immunisation",
        element: <Immunisation />,
      },
    ],
  },
]);
