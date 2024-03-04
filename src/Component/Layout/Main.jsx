import { Outlet } from "react-router-dom";
import Navbar from "../Share/Navbar/Navbar";
import FooterOne from "../Share/Footer/FooterOne";
import FooterTwo from "../Share/Footer/FooterTwo";

const Main = () => {
  return (
    // <div className="bg-[#CFE2FF]">
    <div>
      <Navbar />
      <Outlet />
      {/* <FooterOne /> */}
      <FooterTwo />
    </div>
  );
};

export default Main;
