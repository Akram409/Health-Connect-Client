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
import { useState } from "react";
const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const dateChange = ( dateString) => {
    setSelectedDate(dateString);
  };
  const onFinish = async (values) => {
    const formattedTime = values.start_time
      ? dayjs(values.start_time).format("hh:mm:ss A")
      : "";

    values.appointment_date = selectedDate;
    values.start_time = formattedTime;
    console.log(values);
    try {
      const response = await axios.post(
        "http://localhost:5000/appointments",
        values
      );
      console.log(response);

      // Display success message using Ant Design message component
      message.success("Appointment added successfully");
    } catch (error) {
      console.error("SignUp failed:", error?.response?.data?.error);
      // Display error message using Ant Design message component
      message.error("Failed to signup. Please try again later.");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
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
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Doctor Name"
          name="doctor_id"
          rules={[
            {
              required: true,
              message: "Please input Doctor name!",
            },
          ]}
        >
          <Input />
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
          <Select placeholder="select your Appointment Type">
            <Select.Option value="ECG">ECG</Select.Option>
            <Select.Option value="Full Body Checkup">
              Full Body Checkup
            </Select.Option>
            <Select.Option value="X-Ray">X-Ray</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="status" label="Status">
          <Select placeholder="select your status">
            <Select.Option value="Scheduled">Scheduled</Select.Option>
            <Select.Option value="Cancelled">Cancelled</Select.Option>
            <Select.Option value="Completed">Completed</Select.Option>
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
