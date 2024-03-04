import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#F2F2F2]">
        <aside className="">
          <div className="flex flex-col items-center">
            <Link className="text-4xl text-[#3984F4] italic font-bold">
              HEALTH CONNECT
            </Link>
            <h1 className="font-bold text-lg">
              Connect to your health, always
            </h1>
          </div>
          <div className="mt-5">
            <h1 className="text-3xl font-semibold mb-3">Contact us</h1>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,{" "}
              <br /> consequatur libero fuga dolorem voluptatibus sunt atque{" "}
              <br /> unde maiores sapiente asperiores at dicta, esse molestiae{" "}
              <br /> pariatur in est totam. Quia, accusantium.
            </p>
          </div>
        </aside>
        <div className="h-full border border-black"></div>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </nav>
        <div className="flex flex-col justify-end"></div>
      </footer>
      <footer className="footer footer-center p-4 bg-[#F2F2F2] text-base-content">
        <aside>
          <p className="font-semibold">© 2010 — 2020 - Privacy — Terms</p>
        </aside>
      </footer>
    </div>
  );
};

export default FooterTwo;
