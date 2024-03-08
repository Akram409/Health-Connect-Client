import { Button, DatePicker, Form, Input, Select, message } from "antd";
import axios from "axios";
import { useContext, useState } from "react";
import {
  //   NavLink,
  //   useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { validateEmail } from "../../../lib/util";
import { AuthContext } from "../../../Provider/Authprovider/AuthProvider";

const SignUp = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState("");
  //   const location = useLocation();
  //   const from = location.state?.from?.pathname || "/";
  const dateChange = (date, dateString) => {
    setSelectedDate(dateString);
  };
  console.log(selectedDate);
  if (navigation.state === "loading") {
    return <progress className="progress w-56"></progress>;
  }
  const onFinish = async (values) => {
    console.log(values);
    values.dob = selectedDate;
    const userData = {
      ...values,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        userData
      );
      console.log(response);

      // Set the user in AuthContext after successful signup
      setUser(response.data.user);

      // Display success message using Ant Design message component
      message.success("SignUp successful");
      navigate("/login", { replace: true });
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
    <div className="bg-[#CFE2FF] min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center justify-items-center items-center py-10 lg:pt-[12%]">
        <div className="flex flex-col items-center pb-10 lg:pb-0">
          <h1 className="text-3xl lg:text-7xl text-[#3984F4] italic font-bold">
            HEALTH CONNECT
          </h1>
          <h1 className="font-bold text-xl">Connect to your health, always</h1>
        </div>
        <div className="card w-3/4 lg:w-9/12 bg-[#FFFFFF] text-primary-content shadow-2xl rounded-badge">
          <div className="card-body">
            <h2 className="text-4xl font-semibold mb-5 text-black">SignUp</h2>
            <div className="">
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
                autoComplete="off"
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
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email!",
                    },
                    {
                      validator: (rule, value) => {
                        if (!validateEmail(value)) {
                          return Promise.reject(
                            "Please input a valid email address!"
                          );
                        }
                        return Promise.resolve();
                      },
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item label="Date of Birth" name="dob">
                  <DatePicker
                    onChange={dateChange}
                    size={"default"}
                    placeholder="Select Date"
                  />
                </Form.Item>
                <Form.Item
                  name="bloodGroup"
                  label="Blood Group"
                  rules={[
                    {
                      required: true,
                      message: "Please input your blood group!",
                    },
                  ]}
                >
                  <Select placeholder="select your blood group">
                    <Select.Option value="A+">A+</Select.Option>
                    <Select.Option value="A-">A-</Select.Option>
                    <Select.Option value="B+">B+</Select.Option>
                    <Select.Option value="B-">B-</Select.Option>
                    <Select.Option value="O+">O+</Select.Option>
                    <Select.Option value="O-">O-</Select.Option>
                    <Select.Option value="AB+">AB+</Select.Option>
                    <Select.Option value="AB-">AB-</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Gender!",
                    },
                  ]}
                >
                  <Select placeholder="select your gender">
                    <Select.Option value="Male">Male</Select.Option>
                    <Select.Option value="Female">Female</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Religion"
                  name="religion"
                  rules={[
                    {
                      required: true,
                      message: "Please input your religion!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item name="status" label="Status">
                  <Select placeholder="select your status">
                    <Select.Option value="Single">Single</Select.Option>
                    <Select.Option value="Married">Married</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Street"
                  name="street"
                  rules={[
                    {
                      required: true,
                      message: "Please input your address street!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="City"
                  name="city"
                  rules={[
                    {
                      required: true,
                      message: "Please input your address city!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="State"
                  name="state"
                  rules={[
                    {
                      required: true,
                      message: "Please input your address state!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Postal Code"
                  name="postalCode"
                  rules={[
                    {
                      required: true,
                      message: "Please input your address postalCode!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Phone Number"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Emergency"
                  name="emergency"
                  rules={[
                    {
                      required: true,
                      message: "Please input your emergency phone number!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Profile Link"
                  name="profile"
                  rules={[
                    {
                      required: true,
                      message: "Please input your profile link!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
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
                      Submit
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
