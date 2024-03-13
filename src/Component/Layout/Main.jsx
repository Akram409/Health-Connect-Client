import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Share/Navbar/Navbar";
import NavbarTwo from "../Share/Navbar/NavbarTwo";
import FooterOne from "../Share/Footer/FooterOne";
import FooterTwo from "../Share/Footer/FooterTwo";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider/AuthProvider";

const Main = () => {
  const location = useLocation();
  const {user} = useContext(AuthContext)
  // Check if the current route is '/'
  const isRootRoute = location.pathname === '/';
  return (
    // <div className="bg-[#CFE2FF]">
    <div>
      {user ? <NavbarTwo /> : <Navbar /> }
      <Outlet />
      {isRootRoute ? <FooterOne /> : <FooterTwo />}
    </div>
  );
};

export default Main;
