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
import { useEffect, useState } from "react";
import axios from "axios";

const HealthData = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/healthData");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formatYear = (timestamp) => {
    const date = new Date(timestamp);
    return date.getFullYear();
  };

  const renderLineChart = (dataKey) => (
    <ResponsiveContainer width="100%" height={500}>
    <LineChart  data={datas}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="timestamp"
        padding={{ left: 30, right: 30 }}
        tickFormatter={formatYear} // Format the year on the X-axis
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
        <h1 className="text-5xl font-semibold text-center mb-16  mt-16">
          Health Data
        </h1>
        <div
          role="tablist"
          className="tabs tabs-bordered  font-bold tabs-lg w-full "
        >
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="HeartRate"
            checked
          />
          <div role="tabpanel" className="tab-content p-10">
            {renderLineChart("heartRate")}
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Pressure"
          />
          <div role="tabpanel" className="tab-content p-10">
            {renderLineChart("bloodPressure.systolic")}
            {renderLineChart("bloodPressure.diastolic")}
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Oxygen"
          />
          <div role="tabpanel" className="tab-content p-10">
            {renderLineChart("oxygenLevel")}
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthData;
