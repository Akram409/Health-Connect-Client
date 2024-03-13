import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/Authprovider/AuthProvider";

const NavbarTwo = () => {
  const { logOut, loading } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const [usersData, setUsersData] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/user/${user.email}`);
        if (response.ok) {
          const userData = await response.json();
          // console.log(usersData?)
          setUsersData(userData.user);
        } else {
          throw new Error('Failed to fetch user data');
        }
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    fetchUserData();
  }, [user]);

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

  return (
    <div className="navbar bg-base-100">
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
              <h1>Dashboard</h1>
            </li>
            <li>
              <h1>Appointment</h1>
            </li>
            <li>
              <h1>Services</h1>
            </li>
          </ul>
        </div>
        <Link className="text-3xl font-bold text-blue-800" to="/">
          HEALTH CONNECTHEALTH CONNECT
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center">
          <li>
            <h1>Dashboard</h1>
          </li>
          <li>
            <h1>Appointment</h1>
          </li>
          <li>
            <h1>Services</h1>
          </li>
          <li>
            <button className="btn border-2 border-black font-bold">
              {usersData?.name}
            </button>
          </li>
          <li>
            <Link to="/">
              <button
                className="btn border-2 border-black font-bold"
                onClick={handleLogOut}
              >
                LOGOUT
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarTwo;
