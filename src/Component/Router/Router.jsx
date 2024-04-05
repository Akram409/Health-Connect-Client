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
import BookAppointment from "../Page/Appointment/BookAppointment";

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
        element: <PrivateRouter loggedInRedirect={false}><Login /></PrivateRouter>,
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
        element:  <PrivateRouter loggedInRedirect={true}><Dashboard /></PrivateRouter>,
      },
      {
        path: "/appointment",
        element: <PrivateRouter loggedInRedirect={true}><Appointment /></PrivateRouter>,
      },
      {
        path: "/services",
        element: <PrivateRouter loggedInRedirect={true}><Services /></PrivateRouter>,
      },
      {
        path: "/healthData",
        element: <PrivateRouter loggedInRedirect={true}><HealthData /></PrivateRouter>,
      },
      {
        path: "/report",
        element: <PrivateRouter loggedInRedirect={true}><Report /></PrivateRouter>,
      },
      {
        path: "/bills",
        element: <PrivateRouter loggedInRedirect={true}><Bills /></PrivateRouter>,
      },
      {
        path: "/caloriesIntake",
        element: <PrivateRouter loggedInRedirect={true}><CaloriesIntake /></PrivateRouter>,
      },
      {
        path: "/immunisation",
        element: <PrivateRouter loggedInRedirect={true}><Immunisation /></PrivateRouter> ,
      },
      {
        path: "/bookappointment",
        element: <PrivateRouter loggedInRedirect={true}><BookAppointment /></PrivateRouter> ,
      },
      {
        path: "/private",
        element: <PrivateRouter /> ,
      },
    ],
  },
]);
