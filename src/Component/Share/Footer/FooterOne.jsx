import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook,FaGithub,FaInstagram    } from "react-icons/fa";

const FooterOne = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-[#F2F2F2] rounded">
        <nav className="grid grid-flow-row lg:grid-flow-col gap-10 font-semibold">
          <Link className="">Product</Link>
          <Link className="">Features</Link>
          <Link className="">Resources</Link>
          <Link className="text-3xl text-[#3984F4] italic font-bold">
            HEALTH CONNECT
          </Link>
          <Link className="">About</Link>
          <Link className="">Blog</Link>
          <Link className="">Support</Link>
        </nav>
        <div className="border-2 w-2/3"></div>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link className="rounded-full p-2 border-2 border-black">
              <FaTwitter size="1.5em"/>
            </Link>
            <Link className="rounded-full p-2 border-2 border-black">
              <FaFacebook size="1.5em"/>
            </Link>
            <Link className="rounded-full p-2 border-2 border-black">
              <FaGithub  size="1.5em"/>
            </Link>
            <Link className="rounded-full p-2 border-2 border-black">
              <FaInstagram  size="1.5em"/>
            </Link>
          </div>
        </nav>
        <aside>
          <p className="font-semibold">© 2010 — 2020 - Privacy — Terms</p>
        </aside>
      </footer>
    </div>
  );
};

export default FooterOne;
