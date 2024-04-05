import { Button, Form, Input, message } from "antd";
import { AuthContext } from "../../../Provider/Authprovider/AuthProvider";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {
  // NavLink,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { validateEmail } from "../../../lib/util";

const Login = () => {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const navigation = useNavigation();
  const location = useLocation();
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    // Function to fetch all users from the server
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/user");
        setAllUser(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchAllUsers();
  }, []);
  if (navigation.state === "loading") {
    return <progress className="progress w-56"></progress>;
  }
  const onFinish = async ({ email, password }) => {
    try {
      await login(email, password);
      
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="bg-[#CFE2FF] lg:min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center justify-items-center items-center py-10 lg:pt-[12%]">
        <div className="flex flex-col items-center pb-10 lg:pb-0">
          <h1 className="text-3xl lg:text-7xl text-[#3984F4] italic font-bold">
            HEALTH CONNECT
          </h1>
          <h1 className="font-bold text-xl">Connect to your health, always</h1>
        </div>
        <div className="card w-1/2 lg:w-2/3 bg-[#FFFFFF] text-primary-content shadow-2xl rounded-badge">
          <div className="card-body">
            <h2 className="text-4xl font-semibold mb-5 text-black">Login</h2>
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

export default Login;
