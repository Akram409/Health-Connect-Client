import { Link } from "react-router-dom";
import Profile from "../../Share/Profile/Profile";

const Services = () => {
  return (
    <div className="mx-16 mb-40 ">
      <Profile />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 lg:gap-3 mt-28">
        <Link to="/healthData">
          <button className="btn btn-outline btn-primary btn-lg w-full">
            Health data
          </button>
        </Link>
        <Link to="/report">
          <button className="btn btn-outline btn-primary btn-lg w-full">
            Reports
          </button>
        </Link>
        <Link to="/bills">
          <button className="btn btn-outline btn-primary btn-lg w-full">Bills</button>
        </Link>
        <Link to="/">
          <button className="btn btn-outline btn-primary btn-lg w-full">
            Covid-19 tests
          </button>
        </Link>
        <Link to="/immunisation">
          <button className="btn btn-outline btn-primary btn-lg w-full">
            Immunisation
          </button>
        </Link>
        <Link to="/">
          <button className="btn btn-outline btn-primary btn-lg w-full">
            Clinic Record
          </button>
        </Link>
        <Link to="/">
          <button className="btn btn-outline btn-primary btn-lg w-full">
            BMI calculator
          </button>
        </Link>
        <Link to="/caloriesIntake">
          <button className="btn btn-outline btn-primary btn-lg w-full">
            Calories intake{" "}
          </button>
        </Link>
        <Link to="/">
          <button className="btn btn-outline btn-primary btn-lg w-full">
            History
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
