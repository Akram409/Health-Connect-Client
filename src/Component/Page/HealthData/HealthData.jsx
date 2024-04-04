  import  { useContext, useEffect, useState } from "react";
  import axios from "axios";
  import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  import Profile from "../../Share/Profile/Profile";
  import { AuthContext } from "../../../Provider/Authprovider/AuthProvider";

  const HealthData = () => {
    const { user } = useContext(AuthContext);
    const [datas, setData] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [systolicValue, setSystolicValue] = useState("");
    const [diastolicValue, setDiastolicValue] = useState("");
    const [oxygenValue, setOxygenValue] = useState("");
    const [heightValue, setHeightValue] = useState("");
    const [weightValue, setWeightValue] = useState("");
    const [activeTab, setActiveTab] = useState("heartRate"); // Initially set the active tab

    const updateHealthData = async ( newData) => {
      try {
        await axios.put(`http://localhost:5000/healthData/${user?._id}`, newData);
        console.log("Health data updated successfully.");
        // Optionally, update state or perform other actions after successful update
      } catch (error) {
        console.error("Error updating health data:", error);
        // Optionally, handle errors
      }
    };
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/healthData");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    useEffect(() => {
      fetchData();
    }, [user,datas,inputValue,systolicValue,diastolicValue,oxygenValue,heightValue,weightValue]);

    const formatMonth = (timestamp) => {
      const date = new Date(timestamp);
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      return monthNames[date.getMonth()]; // Get the month name from the array based on the month index
    };

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

    const handleAddHeartRateData = () => {
      updateHealthData({heartRate:inputValue});
    };

    const handleAddSystolicData = () => {
      updateHealthData({bloodPressure: {
        systolic: systolicValue
      }})
    };

    const handleAddDiastolicData = () => {
      updateHealthData({bloodPressure: {
        diastolic: diastolicValue
      }})
    };

    const handleAddOxygenData = () => {
      updateHealthData({oxygenLevel:oxygenValue})
    };

    const handleAddHeightData = () => {
      updateHealthData({bmi: {
        height: heightValue
      }})
    };

    const handleAddWeightData = () => {
      updateHealthData({bmi: {
        weight: weightValue
      }})
    };

    const renderLineChart = (dataKey) => (
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={datas}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="timestamp"
            padding={{ left: 30, right: 30 }}
            tickFormatter={formatMonth} // Format the month on the X-axis
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    );

    return (
      <>
        <div className="mx-16 mb-40 ">
          <Profile />
          <h1 className="text-5xl font-semibold text-center mb-16 mt-16">
            Health Data
          </h1>
          <div
            role="tablist"
            className="tabs tabs-bordered font-bold tabs-lg w-full "
          >
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="HeartRate"
              checked={activeTab === "heartRate"}
              onClick={() => handleTabClick("heartRate")}
            />
            <div role="tabpanel" className="tab-content p-10">
              {renderLineChart("heartRate")}
              <div className="flex justify-center mt-5">
                <div className="join">
                  <input
                    className="input input-bordered join-item"
                    placeholder="Input Here"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  <button
                    className="btn join-item rounded-r-full border border-black"
                    onClick={handleAddHeartRateData}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Pressure"
              checked={activeTab === "bloodPressure"}
              onClick={() => handleTabClick("bloodPressure")}
            />
            <div role="tabpanel" className="tab-content p-10">
              {renderLineChart("bloodPressure.systolic")}
              {renderLineChart("bloodPressure.diastolic")}
              <div className="flex flex-col items-center gap-2 justify-center mt-5">
                <div className="join">
                  <input
                    className="input input-bordered join-item"
                    placeholder="Input Systolic Here"
                    value={systolicValue}
                    onChange={(e) => setSystolicValue(e.target.value)}
                  />
                  <button
                    className="btn join-item rounded-r-full border border-black"
                    onClick={handleAddSystolicData}
                  >
                    Add
                  </button>
                </div>
                <div className="join">
                  <input
                    className="input input-bordered join-item"
                    placeholder="Input Diastolic Here"
                    value={diastolicValue}
                    onChange={(e) => setDiastolicValue(e.target.value)}
                  />
                  <button
                    className="btn join-item rounded-r-full border border-black"
                    onClick={handleAddDiastolicData}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Oxygen"
              checked={activeTab === "oxygenLevel"}
              onClick={() => handleTabClick("oxygenLevel")}
            />
            <div role="tabpanel" className="tab-content p-10">
              {renderLineChart("oxygenLevel")}
              <div className="flex justify-center mt-5">
                <div className="join">
                  <input
                    className="input input-bordered join-item"
                    placeholder="Input OxygenRate Here"
                    value={oxygenValue}
                    onChange={(e) => setOxygenValue(e.target.value)}
                  />
                  <button
                    className="btn join-item rounded-r-full border border-black"
                    onClick={handleAddOxygenData}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="BMI"
              checked={activeTab === "bmi"}
              onClick={() => handleTabClick("bmi")}
            />
            <div role="tabpanel" className="tab-content p-10">
              {renderLineChart("bmi.height")}
              {renderLineChart("bmi.weight")}
              <div className="flex flex-col items-center gap-2 justify-center mt-5">
                <div className="join">
                  <input
                    className="input input-bordered join-item"
                    placeholder="Input Height Here"
                    value={heightValue}
                    onChange={(e) => setHeightValue(e.target.value)}
                  />
                  <button
                    className="btn join-item rounded-r-full border border-black"
                    onClick={handleAddHeightData}
                  >
                    Add
                  </button>
                </div>
                <div className="join">
                  <input
                    className="input input-bordered join-item"
                    placeholder="Input Weight Here"
                    value={weightValue}
                    onChange={(e) => setWeightValue(e.target.value)}
                  />
                  <button
                    className="btn join-item rounded-r-full border border-black"
                    onClick={handleAddWeightData}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default HealthData;
