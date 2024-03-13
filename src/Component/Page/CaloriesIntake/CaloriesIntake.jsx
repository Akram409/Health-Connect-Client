import { message } from "antd";
import Profile from "../../Share/Profile/Profile";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../Provider/Authprovider/AuthProvider";

const CaloriesIntake = () => {
  const { user } = useContext(AuthContext);
  const [datas, setData] = useState([]);
  const [usersData, setUsersData] = useState("");

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

  const handleFoodClick = async (calories) => {
    try {
      const newCalories = usersData?.calories + calories;

      // Make PUT request to update user's calorie intake
      await axios.put(`http://localhost:5000/user/calories/${user?.email}`, {
        calories: newCalories,
      });

      // Show success message
      message.success("Calories updated successfully");
      setUsersData((prevUserData) => ({
        ...prevUserData,
        calories: newCalories,
      }));
    } catch (error) {
      console.error("Error updating user calorie intake:", error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/user/${user?.email}`
        );
        if (response.ok) {
          const userData = await response.json();
          setUsersData(userData.user);
        } else {
          throw new Error("Failed to fetch user data");
        }
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    fetchUserData();
  }, [user, usersData]);

  return (
    <div className="mx-16 mb-40 ">
      <Profile />
      <div className="border-2 mt-28 p-10 rounded-box bg-[#D9D9D9]">
        <h1 className="text-3xl font-semibold mb-5 text-center">
          Calories intake for 4 Nov 2023
        </h1>
        <div className="text-center p-10 bg-[#FFFF] rounded-box mb-6">
          <h1 className="text-4xl font-semibold">{usersData?.calories} Kcal</h1>
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
            <button
              className="btn btn-accent font-semibold"
              onClick={() => document.getElementById("my_modal_5").showModal()}
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
                      onClick={() => handleFoodClick(item.calories)}
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
