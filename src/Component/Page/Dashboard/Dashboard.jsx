import Profile from "../../Share/Profile/Profile";
import { useEffect, useState } from "react";
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
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import dayLocaleData from "dayjs/plugin/localeData";
import { Calendar, Col, Radio, Row, Select, Typography, theme } from "antd";
import axios from "axios";

dayjs.extend(dayLocaleData);
const Dashboard = () => {
  const [datas, setData] = useState([]);
  const [medicationdata, setMedicationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/medication");
        setMedicationData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
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
      <LineChart data={datas}>
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
  const { token } = theme.useToken();
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  const wrapperStyle = {
    width: "100%",
    border: `4px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div className="mx-16 mb-40">
      <Profile />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5  mt-28">
        <div className="border-2 px-2 py-2">
          <h1 className="text-2xl font-semibold">Vital Sign</h1>
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
            <div role="tabpanel" className="tab-content py-5 lg:py-0 lg:p-10">
              {renderLineChart("heartRate")}
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Pressure"
            />
            <div role="tabpanel" className="tab-content py-5 lg:py-0 lg:p-10">
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
            <div role="tabpanel" className="tab-content py-5 lg:py-0 lg:p-10">
              {renderLineChart("oxygenLevel")}
            </div>
          </div>
          <div>
            {/* Medication */}
            <div className="border-4 p-2">
              <h1 className="text-2xl font-bold mb-3">Medication</h1>
              {medicationdata.map((medication) => (
                <div
                  key={medication._id}
                  className="card bg-[#ffff] shadow-xl mb-5 flex-col md:flex-row p-2 border-4"
                >
                  <div className="avatar">
                    <div className="lg:w-32 w-full rounded">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="flex flex-col gap-4 md:flex-row lg:gap-0 justify-between items-center">
                      <div>
                        <p className="text-lg font-bold">{medication.name}</p>
                        <p className="text-base">{medication.dosage}</p>
                      </div>
                      <div>
                        <div className="flex items-center  gap-2">
                          <div className="badge badge-accent badge-xs"></div>
                          <p>XXXXX</p>
                        </div>
                        <p>10-02-2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div style={wrapperStyle}>
            <Calendar
              fullscreen={false}
              headerRender={({ value, type, onChange, onTypeChange }) => {
                const start = 0;
                const end = 12;
                const monthOptions = [];
                let current = value.clone();
                const localeData = value.localeData();
                const months = [];
                for (let i = 0; i < 12; i++) {
                  current = current.month(i);
                  months.push(localeData.monthsShort(current));
                }
                for (let i = start; i < end; i++) {
                  monthOptions.push(
                    <Select.Option key={i} value={i} className="month-item">
                      {months[i]}
                    </Select.Option>
                  );
                }
                const year = value.year();
                const month = value.month();
                const options = [];
                for (let i = year - 10; i < year + 10; i += 1) {
                  options.push(
                    <Select.Option key={i} value={i} className="year-item">
                      {i}
                    </Select.Option>
                  );
                }
                return (
                  <div
                    style={{
                      padding: 8,
                    }}
                  >
                    <Typography.Title level={4}>Appointment</Typography.Title>
                    <Row gutter={8}>
                      <Col>
                        <Radio.Group
                          size="small"
                          onChange={(e) => onTypeChange(e.target.value)}
                          value={type}
                        >
                          <Radio.Button value="month">Month</Radio.Button>
                          <Radio.Button value="year">Year</Radio.Button>
                        </Radio.Group>
                      </Col>
                      <Col>
                        <Select
                          size="small"
                          dropdownMatchSelectWidth={false}
                          className="my-year-select"
                          value={year}
                          onChange={(newYear) => {
                            const now = value.clone().year(newYear);
                            onChange(now);
                          }}
                        >
                          {options}
                        </Select>
                      </Col>
                      <Col>
                        <Select
                          size="small"
                          dropdownMatchSelectWidth={false}
                          value={month}
                          onChange={(newMonth) => {
                            const now = value.clone().month(newMonth);
                            onChange(now);
                          }}
                        >
                          {monthOptions}
                        </Select>
                      </Col>
                    </Row>
                  </div>
                );
              }}
              onPanelChange={onPanelChange}
            />
            <div className="mt-5">
              <div className="card border-2">
                <div className="card-body items-center text-center">
                  <h2 className="text-3xl font-bold ">Bills</h2>
                  <p className="font-semibold text-4xl">$0 Overdue</p>
                  <div className="card-actions justify-center mt-5">
                    <button className="btn border-2 border-black">
                      View Bills
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
