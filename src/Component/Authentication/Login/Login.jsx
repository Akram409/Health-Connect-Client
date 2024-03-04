import { Button, Form, Input } from "antd";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="bg-[#CFE2FF] min-h-screen">
      <div className="grid grid-cols-2 justify-items-center items-center lg:pt-[12%]">
        <div className="flex flex-col items-center">
          <h1 className="text-7xl text-[#3984F4] italic font-bold">
            HEALTH CONNECT
          </h1>
          <h1 className="font-bold text-xl">Connect to your health, always</h1>
        </div>
        <div className="card w-2/3 bg-[#FFFFFF] text-primary-content shadow-2xl rounded-badge">
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
