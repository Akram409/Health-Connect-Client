import Profile from "../../Share/Profile/Profile";

const Services = () => {
  return (
    <div className="mx-16 mb-40 ">
      <Profile />
      <div className="grid grid-cols-3 gap-3 mt-28">
        <button className="btn btn-outline btn-primary btn-lg">Health data</button>
        <button className="btn btn-outline btn-primary btn-lg">Reports</button>
        <button className="btn btn-outline btn-primary btn-lg">Bills</button>
        <button className="btn btn-outline btn-primary btn-lg">Covid-19 tests</button>
        <button className="btn btn-outline btn-primary btn-lg">Immunisation</button>
        <button className="btn btn-outline btn-primary btn-lg">Clinic Record</button>
        <button className="btn btn-outline btn-primary btn-lg">BMI calculator</button>
        <button className="btn btn-outline btn-primary btn-lg">Calories intake </button>
        <button className="btn btn-outline btn-primary btn-lg">History</button>
      </div>
    </div>
  );
};

export default Services;
