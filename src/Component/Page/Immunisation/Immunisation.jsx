import { FaAngleRight } from "react-icons/fa";
import Profile from "../../Share/Profile/Profile";
import { FaFilePdf } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";

const Immunisation = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/immunisation");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="mx-16 mb-40 ">
      <Profile />
      <div className="border-2 mt-28 p-10 rounded-box bg-[#D9D9D9]">
        <h1 className="text-5xl font-semibold text-center mb-16">
          Immunisation Record
        </h1>
        <div className="border-2 p-10 rounded-box bg-[#F0F2F5]">
          <h1 className="text-2xl font-semibold mb-5">
            Completed Immunisation
          </h1>

          {/* Card here  */}
          {datas.map((item, index) => (
            <>
              <div key={index} className="card bg-[#ffff] shadow-2xl mb-5">
                <div className="card-body">
                  <h2 className="text-accent font-bold text-3xl mb-5">
                    {item.vaccine_name}
                  </h2>
                  <p className="font-semibold mb-2 text-lg">{item.administration_date}</p>

                  <div className="card-actions justify-between items-center">
                    <div>
                      <h1 className="">Venue:</h1>
                      <p className="font-bold">{item.location}</p>
                    </div>
                    <button
                        className="btn btn-accent text-white"
                        onClick={() =>
                          document.getElementById("my_modal_5").showModal()
                        }
                      >
                        View More
                      </button>
                      <dialog
                        id="my_modal_5"
                        className="modal modal-bottom sm:modal-middle"
                      >
                        <div className="modal-box">
                          <h3 className="font-bold text-xl  text-center">Details</h3>
                          <p className="py-2"><span className="font-bold">Username</span>: {item.username}</p>
                          <p className="py-2"><span className="font-bold">Dose Number</span>: {item.dose_number}</p>
                          <p className="py-2"><span className="font-bold">Provider</span>: {item.provider}</p>
                          <p className="py-2"><span className="font-bold">Notes</span>: {item.notes}</p>
                          <div className="modal-action">
                            <form method="dialog">
                              <button className="btn btn-error text-white">Close</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                  </div>
                </div>
              </div>
            </>
          ))}

          <button className="btn mb-5">
            <div className="flex items-center gap-2">
              <FaFilePdf size="1.7em" color="#00b6ff" />
              <h1 className="text-xl font-bold text-info">Download PDF</h1>
            </div>
          </button>

          {/* Recommendation  */}
          <div>
            <h1 className="text-2xl font-bold mb-3">Nationally Recommended</h1>
            <div className="card bg-[#ffff] shadow-xl mb-5">
              <div className="card-body">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                  <p className="text-lg mb-4">
                    We are using cookies for no reason.
                  </p>
                  <button className="btn btn-outline btn-accent font-bold">
                    View More <FaAngleRight size="1.5em" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-3">Covid Recommendation</h1>
            {datas.map((item, index) => (
            <>
              <div key={index} className="card bg-[#ffff] shadow-2xl mb-5">
                <div className="card-body">
                  <h2 className="text-accent font-bold text-3xl mb-5">
                    {item.vaccine_name}
                  </h2>
                  <p className="font-semibold mb-2 text-lg">{item.administration_date}</p>

                  <div className="card-actions justify-between items-center">
                    <div>
                      <h1 className="">Venue:</h1>
                      <p className="font-bold">{item.location}</p>
                    </div>
                    <button
                        className="btn btn-accent text-white"
                        onClick={() =>
                          document.getElementById("my_modal_5").showModal()
                        }
                      >
                        View More
                      </button>
                      <dialog
                        id="my_modal_5"
                        className="modal modal-bottom sm:modal-middle"
                      >
                        <div className="modal-box">
                          <h3 className="font-bold text-xl  text-center">Details</h3>
                          <p className="py-2"><span className="font-bold">Username</span>: {item.username}</p>
                          <p className="py-2"><span className="font-bold">Dose Number</span>: {item.dose_number}</p>
                          <p className="py-2"><span className="font-bold">Provider</span>: {item.provider}</p>
                          <p className="py-2"><span className="font-bold">Notes</span>: {item.notes}</p>
                          <div className="modal-action">
                            <form method="dialog">
                              <button className="btn btn-error text-white">Close</button>
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
      </div>
    </div>
  );
};

export default Immunisation;
