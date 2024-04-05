import { message } from "antd";
import Profile from "../../Share/Profile/Profile";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../Provider/Authprovider/AuthProvider";
import { MdDeleteOutline } from "react-icons/md";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const CaloriesIntake = () => {
  const { user } = useContext(AuthContext);
  const [datas, setData] = useState([]);
  const [caloriesData, setCaloriesData] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [morningFoods, setMorningFoods] = useState([]);
  const [afternoonFoods, setAfternoonFoods] = useState([]);
  const [nightFoods, setNightFoods] = useState([]);
  const [category, setCategory] = useState("");

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

      // Make POST request to update user's calorie intake with today's date, item's calories, and category
      await axios.post(`http://localhost:5000/calories/${user?.email}`, {
        date: currentDate.toLocaleDateString("en-GB"),
        calories: item.calories,
        foodName: item.name,
        category: category, // Use the category state here
      });
      message.success("Calories updated successfully");
      setCaloriesData((prevUserData) => ({
        ...prevUserData,
        calories: newCalories,
      }));

      // Determine which category the food belongs to and update the corresponding state
      if (category === "morning") {
        setMorningFoods((prevFoods) => [...prevFoods, item]);
      } else if (category === "afternoon") {
        setAfternoonFoods((prevFoods) => [...prevFoods, item]);
      } else if (category === "night") {
        setNightFoods((prevFoods) => [...prevFoods, item]);
      }
    } catch (error) {
      console.error("Error updating user calorie intake:", error);
    }
  };

  const handleFoodBtn = async (id, calories, name, category) => {
    setSelectedFoods((prevSelectedFoods) =>
      prevSelectedFoods.filter((it) => it._id !== id)
    );
    // Make POST request to update user's calorie intake with today's date and item's calories
    await axios.put(`http://localhost:5000/calories/remove/${user?.email}`, {
      date: currentDate.toLocaleDateString("en-GB"),
      calories: calories,
      foodName: name,
      category: category,
    });
  };

  const fetchUserCaloriesData = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/user/caloriesData/${user?.email}`,
        {
          dates: currentDate.toLocaleDateString("en-GB"),
        }
      );
      const userData = response.data;
      setCaloriesData(userData);

      // Initialize variables to hold food items for each category
      let morningFoodsArr = [];
      let afternoonFoodsArr = [];
      let nightFoodsArr = [];

      // Iterate through the userData to categorize food items
      userData.forEach((data) => {
        data.food.forEach((food) => {
          if (food.category === "morning") {
            morningFoodsArr.push(food);
          } else if (food.category === "afternoon") {
            afternoonFoodsArr.push(food);
          } else if (food.category === "night") {
            nightFoodsArr.push(food);
          }
        });
      });

      // Set the categorized food items to their respective states
      setMorningFoods(morningFoodsArr);
      setAfternoonFoods(afternoonFoodsArr);
      setNightFoods(nightFoodsArr);

      // Set the selected foods to the first day's food items
      setSelectedFoods(userData[0] ? userData[0].food : []);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  useEffect(() => {
    fetchUserCaloriesData();
  }, [user, caloriesData, currentDate]);

  const handleDateChange = (amount) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + amount);
    setCurrentDate(newDate);
  };

  const openFoodModal = (category) => {
    setCategory(category);
    document.getElementById("my_modal_5").showModal();
  };

  console.log(selectedFoods);
  return (
    <div className="mx-16 mb-40 ">
      <Profile />
      <div className="border-2 mt-28 p-10 rounded-box bg-[#D9D9D9]">
        <div className="flex  items-center justify-center mb-5 gap-5">
          <FaAngleLeft
            size="2em"
            className="cursor-pointer"
            onClick={() => handleDateChange(-1)}
          />
          <h1 className="text-3xl font-semibold text-center">
            Calories intake for {currentDate.toLocaleDateString("en-GB")}
          </h1>
          <FaAngleRight
            size="2em"
            className="cursor-pointer"
            onClick={() => handleDateChange(1)}
          />
        </div>
        <div className="">
          <div className="text-center flex justify-evenly items-center gap-4 p-10 bg-[#FFFF] rounded-box mb-6">
            <div className="min-w-[40%]">
              <button
                className="btn text-4xl font-semibold  text-center"
                style={{
                  backgroundColor:
                    caloriesData[0]?.calories > 2200 ? "red" : "",
                  color: caloriesData[0]?.calories > 2200 ? "white" : "inherit",
                }}
              >
                {caloriesData[0]?.calories} Kcal
              </button>
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
                    onClick={() =>
                      handleFoodBtn(
                        item._id,
                        item.calories,
                        item.name,
                        item.category
                      )
                    }
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
                onClick={() => openFoodModal("morning")}
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
                        className={`btn ${
                          selectedFoods.some(
                            (selectedItem) => selectedItem.name === item.name
                          )
                            ? "btn-success"
                            : "btn-primary"
                        } text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg mx-1 my-1`}
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
            {morningFoods.map((item, index) => (
              <>
                <button
                  className="btn btn-primary text-white  btn-xs sm:btn-sm md:btn-md"
                  key={index}
                  onClick={() =>
                    handleFoodBtn(
                      item._id,
                      item.calories,
                      item.name,
                      item.category
                    )
                  }
                >
                  <span className="text-xl font-bold">{item.name}</span>
                  <MdDeleteOutline size="1.8em" />
                </button>
              </>
            ))}
          </div>
        </div>
        <div className="flex justify-evenly items-center border-2 py-5 rounded-box mb-4 bg-[#C3C3C3]">
          <div className="text-center min-w-[40%]">
            <div className="text-3xl font-semibold text-center mb-5">
              <h1>Afternoon</h1>
              <p>12am - 11am </p>
            </div>
            <div>
              <button
                className="btn btn-accent font-semibold"
                onClick={() => openFoodModal("afternoon")}
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
                        className={`btn ${
                          selectedFoods.some(
                            (selectedItem) => selectedItem.name === item.name
                          )
                            ? "btn-success"
                            : "btn-primary"
                        } text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg mx-1 my-1`}
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
            {afternoonFoods.map((item, index) => (
              <>
                <button
                  className="btn btn-primary text-white  btn-xs sm:btn-sm md:btn-md"
                  key={index}
                  onClick={() =>
                    handleFoodBtn(
                      item._id,
                      item.calories,
                      item.name,
                      item.category
                    )
                  }
                >
                  <span className="text-xl font-bold">{item.name}</span>
                  <MdDeleteOutline size="1.8em" />
                </button>
              </>
            ))}
          </div>
        </div>
        <div className="flex justify-evenly items-center border-2 py-5 rounded-box mb-4 bg-[#C3C3C3]">
          <div className="text-center min-w-[40%]">
            <div className="text-3xl font-semibold text-center mb-5">
              <h1>Night</h1>
              <p>12am - 11am </p>
            </div>
            <div>
              <button
                className="btn btn-accent font-semibold"
                onClick={() => openFoodModal("night")}
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
                        className={`btn ${
                          selectedFoods.some(
                            (selectedItem) => selectedItem.name === item.name
                          )
                            ? "btn-success"
                            : "btn-primary"
                        } text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg mx-1 my-1`}
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
            {nightFoods.map((item, index) => (
              <>
                <button
                  className="btn btn-primary text-white  btn-xs sm:btn-sm md:btn-md"
                  key={index}
                  onClick={() =>
                    handleFoodBtn(
                      item._id,
                      item.calories,
                      item.name,
                      item.category
                    )
                  }
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
