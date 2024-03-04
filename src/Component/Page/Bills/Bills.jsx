import Profile from "../../Share/Profile/Profile";
import { FaAngleRight } from "react-icons/fa";

const Bills = () => {
  return (
    <div className="mx-16 mb-40 ">
      <Profile />
      <div className="border-2 mt-28 p-10 rounded-box bg-[#D9D9D9]">
        <h1 className="text-3xl font-bold mb-4">Outstanding Bills by Cluster</h1>
        <div className="flex border-2 border-black rounded-box p-2 mb-4 bg-[#FFFF]">
          <div className="grow-0 h-32 w-32">
            <div className="avatar">
              <div className="w-32 rounded">
                <img
                  src="https://i.ibb.co/vqJSf3x/National-healthcare-group-logo.jpg"
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="flex w-full h-32 items-center ">
            <div className="flex items-center w-full">
              <div>
                <h1 className="text-3xl font-bold ms-3 mb-5">
                  National Health Group
                </h1>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold ms-3">Amount to pay</h2>
                  <p>$10.00</p>
                </div>
              </div>
            </div>
            <div>
              <FaAngleRight size="2em" />
            </div>
          </div>
        </div>
        <div className="flex border-2 border-black rounded-box p-2 mb-4 bg-[#FFFF]">
          <div className="grow-0 h-32 w-32">
            <div className="avatar">
              <div className="w-32 rounded">
                <img
                  src="https://i.ibb.co/vqJSf3x/National-healthcare-group-logo.jpg"
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="flex w-full h-32 items-center ">
            <div className="flex items-center w-full">
              <div>
                <h1 className="text-3xl font-bold ms-3 mb-5">
                  National Health Group
                </h1>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold ms-3">Amount to pay</h2>
                  <p>$10.00</p>
                </div>
              </div>
            </div>
            <div>
              <FaAngleRight size="2em" />
            </div>
          </div>
        </div>
        <div className="flex border-2 border-black rounded-box p-2 mb-4 bg-[#FFFF]">
          <div className="grow-0 h-32 w-32">
            <div className="avatar">
              <div className="w-32 rounded">
                <img
                  src="https://i.ibb.co/vqJSf3x/National-healthcare-group-logo.jpg"
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="flex w-full h-32 items-center ">
            <div className="flex items-center w-full">
              <div>
                <h1 className="text-3xl font-bold ms-3 mb-5">
                  National Health Group
                </h1>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold ms-3">Amount to pay</h2>
                  <p>$10.00</p>
                </div>
              </div>
            </div>
            <div>
              <FaAngleRight size="2em" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bills;
