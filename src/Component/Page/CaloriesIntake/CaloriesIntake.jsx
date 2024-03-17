import { message } from "antd";
import Profile from "../../Share/Profile/Profile";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../Provider/Authprovider/AuthProvider";
import { MdDeleteOutline } from "react-icons/md";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const today = new Date().toLocaleDateString("en-GB");

const CaloriesIntake = () => {
  const { user } = useContext(AuthContext);
  const [datas, setData] = useState([]);
  const [caloriesData, setCaloriesData] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/caloriesIntake"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFoodClick = async (item) => {
    try {
      const newCalories = item.calories;
      setSelectedFoods((prevSelectedFoods) => [...prevSelectedFoods, item]);

      // Make POST request to update user's calorie intake with today's date and item's calories
      await axios.post(`http://localhost:5000/calories/${user?.email}`, {
        date: currentDate,
        calories: item.calories,
      });
      message.success("Calories updated successfully");
      setCaloriesData((prevUserData) => ({
        ...prevUserData,
        calories: newCalories,
      }));
    } catch (error) {
      console.error("Error updating user calorie intake:", error);
    }
  };
  const handleFoodBtn = async (id, calories) => {
    setSelectedFoods((prevSelectedFoods) =>
      prevSelectedFoods.filter((it) => it._id !== id)
    );
    // Make POST request to update user's calorie intake with today's date and item's calories
    await axios.put(`http://localhost:5000/calories/remove/${user?.email}`, {
      date: currentDate,
      calories: calories,
    });
  };
  const fetchUserCaloriesData = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/user/caloriesData/${user?.email}`,
        {
          dates: currentDate,
        }
      );
      const userData = response.data;
      setCaloriesData(userData);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  
  useEffect(() => {
    fetchUserCaloriesData();
  }, [user, caloriesData, currentDate]);

  const handleDateChange = (amount) => {
    setSelectedFoods([])
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + amount);
    setCurrentDate(newDate);
  };

  return (
    <div className="mx-16 mb-40 ">
      <Profile />
      <div className="border-2 mt-28 p-10 rounded-box bg-[#D9D9D9]">
        <div className="flex  items-center justify-center mb-5 gap-5">
          <FaAngleLeft size="2em" className="cursor-pointer" onClick={() => handleDateChange(-1)} />
          <h1 className="text-3xl font-semibold text-center">
            Calories intake for {currentDate.toLocaleDateString("en-GB")}
          </h1>
          <FaAngleRight size="2em" className="cursor-pointer" onClick={() => handleDateChange(1)}/>
        </div>
        <div className="">
          <div className="text-center flex justify-evenly items-center gap-4 p-10 bg-[#FFFF] rounded-box mb-6">
            <div className="min-w-[40%]">
              <h1 className="text-4xl font-semibold">
                {caloriesData[0]?.calories} Kcal
              </h1>
              <h1 className="text-4xl font-semibold text-primary">
                View my daily summary
              </h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3  gap-2">
              {selectedFoods.map((item, index) => (
                <>
                  <button
                    className="btn btn-primary text-white  btn-xs sm:btn-sm md:btn-md"
                    key={index}
                    onClick={() => handleFoodBtn(item._id, item.calories)}
                  >
                    <span className="text-xl font-bold">{item.name}</span>
                    <MdDeleteOutline size="1.8em" />
                  </button>
                </>
              ))}
            </div>
          </div>
        </div>

        {/* Card here  */}
        <div className="flex justify-evenly items-center border-2 py-5 rounded-box mb-4 bg-[#C3C3C3]">
          <div className="text-center min-w-[40%]">
            <div className="text-3xl font-semibold text-center mb-5">
              <h1>Morning</h1>
              <p>12am - 11am </p>
            </div>
            <div>
              <button
                className="btn btn-accent font-semibold"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Add Food
              </button>
              <dialog id="my_modal_5" className="modal ">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg text-center">Food List!</h3>
                  <div className="grid md:grid-cols-2 grid-cols-1">
                    {datas.map((item, index) => (
                      <button
                        key={index}
                        className="btn btn-primary text-white  btn-xs sm:btn-sm md:btn-md lg:btn-lg mx-1 my-1"
                        onClick={() => handleFoodClick(item)}
                      >
                        <span className="text-xl font-bold">{item.name}</span> :{" "}
                        {item.calories}
                      </button>
                    ))}
                  </div>

                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3  gap-2">
            {selectedFoods.map((item, index) => (
              <>
                <button
                  className="btn btn-primary text-white  btn-xs sm:btn-sm md:btn-md"
                  key={index}
                  onClick={() => handleFoodBtn(item._id)}
                >
                  <span className="text-xl font-bold">{item.name}</span>
                  <MdDeleteOutline size="1.8em" />
                </button>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaloriesIntake;
