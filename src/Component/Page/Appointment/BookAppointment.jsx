import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  TimePicker,
  message,
} from "antd";
import axios from "axios";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/Authprovider/AuthProvider";

const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [usersData, setUsersData] = useState("");
  const [doctorOptions, setDoctorOptions] = useState([]);
  const [selectedAppointmentType, setSelectedAppointmentType] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/user/${user.email}`
        );
        if (response.ok) {
          const userData = await response.json();
          // console.log(usersData?)
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
  }, [user]);

  useEffect(() => {
    const fetchDoctorsByType = async (type) => {
      try {
        const response = await axios.get(
          `http://localhost:5000/doctorData/type/${type}`
        );
        setDoctorOptions(response.data);
      } catch (error) {
        console.error("Error fetching doctors by type:", error);
      }
    };

    if (selectedAppointmentType) {
      fetchDoctorsByType(selectedAppointmentType);
    }
  }, [selectedAppointmentType]);

  const handleAppointmentTypeChange = (value) => {
    setSelectedAppointmentType(value);
  };
  console.log(doctorOptions[0]?.name);

  const dateChange = (dateString) => {
    setSelectedDate(dateString);
  };
  const onFinish = async (values) => {
    const formattedTime = values.start_time
      ? dayjs(values.start_time).format("hh:mm:ss A")
      : "";

    values.appointment_date = selectedDate;
    values.start_time = formattedTime;
    values.username = usersData?.name
    values.doctor_id = doctorOptions[0]?.name
    values.status = "Scheduled"
    console.log(values);
    try {
      const response = await axios.post(
        "http://localhost:5000/appointments",
        values
      );
      console.log(response);

      // Display success message using Ant Design message component
      message.success("Appointment added successfully");
      navigate("/appointment");
    } catch (error) {
      console.error("SignUp failed:", error?.response?.data?.error);
      // Display error message using Ant Design message component
      message.error("Failed to signup. Please try again later.");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // console.log(usersData);
  return (
    <div className="flex flex-col justify-center text-center w-full space-y-10">
      <h3 className="font-bold text-3xl">AppointBook Form !</h3>
      <Form
        name="basic"
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
        initialValues={{
          username: usersData?.name,
          doctor_id: doctorOptions[0]?.name,
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          initialValue={usersData.name}
        >
          <Input placeholder={usersData.name} disabled className="font-bold" />
        </Form.Item>

        <Form.Item
          label="Doctor Name"
          name="doctor_id"
          initialValue={doctorOptions.length > 0 ? doctorOptions[0]?.name : ""}
        >
          <Input placeholder={doctorOptions.length > 0 ? doctorOptions[0]?.name : ""} disabled />
        </Form.Item>

        <Form.Item
          label="Appointment Date"
          name="appointment_date"
          style={{ zIndex: 100 }}
        >
          <DatePicker onChange={dateChange} placeholder="Select Date" />
        </Form.Item>

        <Form.Item
          name="appointment_type"
          label="Appointment Type"
          rules={[
            {
              required: true,
              message: "Please Select Appointment Type!",
            },
          ]}
        >
          <Select
            placeholder="select your Appointment Type"
            onChange={handleAppointmentTypeChange}
          >
            <Select.Option value="ECG">ECG</Select.Option>
            <Select.Option value="Full Body Checkup">
              Full Body Checkup
            </Select.Option>
            <Select.Option value="X-Ray">X-Ray</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="status" label="Status">
          <Select
            defaultValue="Scheduled"
            disabled
            placeholder="Scheduled"
            className="font-bold"
          >
            <Select.Option value="Scheduled">Scheduled</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="start_time" label="Start Time">
          <TimePicker />
        </Form.Item>
        <Form.Item
          label="Notes"
          name="notes"
          rules={[
            {
              required: true,
              message: "Please input notes!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <div className="card-actions justify-center">
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              className="text-black font-medium border-2 border-black mt-2"
              htmlType="submit"
            >
              Book Appointment
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default BookAppointment;
