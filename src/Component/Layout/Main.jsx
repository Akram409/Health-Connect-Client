import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Share/Navbar/Navbar";
import FooterOne from "../Share/Footer/FooterOne";
import FooterTwo from "../Share/Footer/FooterTwo";

const Main = () => {
  const location = useLocation();

  // Check if the current route is '/'
  const isRootRoute = location.pathname === '/';
  return (
    // <div className="bg-[#CFE2FF]">
    <div>
      <Navbar />
      <Outlet />
      {isRootRoute ? <FooterOne /> : <FooterTwo />}
    </div>
  );
};

export default Main;
