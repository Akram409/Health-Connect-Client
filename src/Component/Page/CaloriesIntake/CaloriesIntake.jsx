import Profile from "../../Share/Profile/Profile";

const CaloriesIntake = () => {
  return (
    <div className="mx-16 mb-40 ">
      <Profile />
      <div className="border-2 mt-28 p-10 rounded-box bg-[#D9D9D9]">
        <h1 className="text-3xl font-semibold mb-5 text-center">
          Calories intake for 4 Nov 2023
        </h1>
        <div className="text-center p-10 bg-[#FFFF] rounded-box mb-6">
          <h1 className="text-4xl font-semibold">0 Kcal</h1>
          <h1 className="text-4xl font-semibold text-primary">
            View my daily summary
          </h1>
        </div>

        {/* Card here  */}
        <div className="flex flex-col  justify-around items-center border-2 py-10 rounded-box mb-4 bg-[#C3C3C3]">
          <div className="text-3xl font-semibold text-center mb-5">
            <h1>Morning</h1>
            <p>12am - 11am </p>
          </div>
          <div>
            <button className="btn btn-lg">Add Food</button>
          </div>
        </div>
        <div className="flex flex-col  justify-around items-center border-2 py-10 rounded-box mb-4 bg-[#C3C3C3]">
          <div className="text-3xl font-semibold text-center mb-5">
            <h1>Morning</h1>
            <p>12am - 11am </p>
          </div>
          <div>
            <button className="btn btn-lg">Add Food</button>
          </div>
        </div>
        <div className="flex flex-col  justify-around items-center border-2 py-10 rounded-box mb-4 bg-[#C3C3C3]">
          <div className="text-3xl font-semibold text-center mb-5">
            <h1>Morning</h1>
            <p>12am - 11am </p>
          </div>
          <div>
            <button className="btn btn-lg">Add Food</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaloriesIntake;
