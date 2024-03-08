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
import PrivateRouter from "./PrivateRouter";

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
        element:  <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/profile",
        element: <PrivateRouter><Profile /></PrivateRouter>,
      },
      {
        path: "/dashboard",
        element:  <PrivateRouter><Dashboard /></PrivateRouter>,
      },
      {
        path: "/appointment",
        element: <PrivateRouter><Appointment /></PrivateRouter>,
      },
      {
        path: "/services",
        element: <PrivateRouter><Services /></PrivateRouter>,
      },
      {
        path: "/healthData",
        element: <PrivateRouter><HealthData /></PrivateRouter>,
      },
      {
        path: "/report",
        element: <PrivateRouter><Report /></PrivateRouter>,
      },
      {
        path: "/bills",
        element: <PrivateRouter><Bills /></PrivateRouter>,
      },
      {
        path: "/caloriesIntake",
        element: <PrivateRouter><CaloriesIntake /></PrivateRouter>,
      },
      {
        path: "/immunisation",
        element: <PrivateRouter><Immunisation /></PrivateRouter> ,
      },
      {
        path: "/private",
        element: <PrivateRouter /> ,
      },
    ],
  },
]);
