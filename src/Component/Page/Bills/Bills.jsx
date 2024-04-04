import { useEffect, useState } from "react";
import Profile from "../../Share/Profile/Profile";
import { FaAngleRight } from "react-icons/fa";
import axios from "axios";

const email = "admin@gmail.com"
const Bills = () => {
  const [datas, setData] = useState([]);
  const [selectData, setSelectData] = useState();
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/bills");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [datas]);

  const handleMakePayment = async (selectData) => {
    try {
      console.log(selectData)
      const response2 = await axios.put(`http://localhost:5000/totalBill/${email}`, {
        totalAmount:selectData?.totalAmount,
      });

      const response = await axios.post(`http://localhost:5000/bills/${selectData?._id}`, {
        totalAmount: 0,
      });
      
      
      console.log("Payment made successfully:", response.data);
      fetchData();
    } catch (error) {
      console.error("Error making payment:", error);
    }
  };
  const handleSelectData = (data) => {
    setSelectData(data);
    document.getElementById("my_modal_5").showModal();
  };

  return (
    <div className="mx-16 mb-40 ">
      <Profile />
      <div className="border-2 mt-28 p-10 rounded-box bg-[#D9D9D9]">
        <h1 className="text-3xl font-bold mb-4">
          Outstanding Bills by Cluster
        </h1>
        {datas.map((item, index) => (
          <>
            <div
              key={index}
              className="lg:flex border-2 border-black rounded-box p-2 mb-4 bg-[#FFFF]"
            >
              <div className="lg:grow-0 h-32 md:w-32">
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
                      {item.cluster}
                    </h1>
                    <div className="flex items-center gap-5">
                      <h2 className="ms-3 font-semibold">Amount to pay</h2>
                      <h1 className="font-bold text-xl">${item.totalAmount}</h1>
                    </div>
                  </div>
                </div>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn"
                    onClick={() => handleSelectData(item)}
                  >
                    <FaAngleRight size="2em" />
                  </button>
                  <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <div className="flex flex-col items-center gap-5">
                        <h2 className="ms-3 font-semibold">Amount to pay</h2>
                        <h1 className="font-bold text-xl">
                          ${selectData?.totalAmount}
                        </h1>
                        <form method="dialog">
                          <button
                            className="btn btn-warning font-bold"
                            onClick={() => handleMakePayment(selectData)}
                          >
                            Make Payment
                          </button>
                        </form>
                      </div>
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Bills;
// https://i.ibb.co/vqJSf3x/National-healthcare-group-logo.jpg
