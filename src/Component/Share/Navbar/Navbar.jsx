import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/Authprovider/AuthProvider";

const Navbar = () => {
  const { logOut, loading } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  console.log(user);
  useEffect(() => {
    if (user !== null && !loading) {
      console.log(user?.email);
    }
  }, [user, loading]);

  const handleLogOut = () => {
    logOut();
  };

  if (loading) {
    console.log(loading);
    return <div>Loading....</div>;
  }

  console.log(user && user.email);
  return (
    <div className=" ">
      <div className="navbar bg-[#CFE2FF] ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Programmes</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Healthy Living</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-start hidden md:flex">
            <ul className="menu flex flex-row flex-nowrap px-1">
              <li>
                <h1>Programmes</h1>
              </li>
              <li>
                <h1>About</h1>
              </li>
              <li>
                <h1>Healthy Living</h1>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex text-3xl italic font-bold">
          <Link to="/">HEALTH CONNECTHEALTH CONNECT</Link>
        </div>
        <div className="navbar-end gap-2">
          {!user && (
            <>
              <Link to="/login">
                <button className="btn text-white" data-theme="dark">
                  Login
                </button>
              </Link>
              <Link to="/signUp">
                <button className="btn text-white" data-theme="dark">
                  SignUp
                </button>
              </Link>
            </>
          )}
          {user && user.auth && (
            <>
              <Link to="/">
                <button
                  className="btn text-white"
                  data-theme="dark"
                  onClick={handleLogOut}
                >
                  LOGOUT
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
