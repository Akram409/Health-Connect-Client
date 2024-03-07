import Profile from "../../Share/Profile/Profile";
import { useEffect, useState } from "react";

const Appointment = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/healthconnect.patient_appointment.json");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="mx-16 mb-40 ">
      <Profile />
      <div
        role="tablist"
        className="tabs tabs-bordered  font-bold tabs-lg w-full mt-16 "
      >
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Upcoming"
          checked 
        />
        <div role="tabpanel" className="tab-content p-10">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-center text-base">
                <tr>
                  <th>SL</th>
                  <th>Username</th>
                  <th>Doctor</th>
                  <th>Appointment Date</th>
                  <th>Appointment Type</th>
                  <th>Start Time</th>
                  <th>Status</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody className="font-semibold text-center">
                {/* Rows */}
                {datas.map((appointment, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-base-200" : ""}
                  >
                    <th>{index + 1}</th>
                    <td>{appointment.username}</td>
                    <td>{appointment.doctor_id}</td>
                    <td>{appointment.appointment_date}</td>
                    <td>{appointment.appointment_type}</td>
                    <td>{appointment.start_time}</td>
                    <td>
                    <div className="badge badge-accent">{appointment.status}</div>
                    </td>
                    <td className="flex justify-center">
                      <button
                        className="btn btn-warning text-white"
                        onClick={() =>
                          document.getElementById("my_modal_5").showModal()
                        }
                      >
                        Notes
                      </button>
                      <dialog
                        id="my_modal_5"
                        className="modal modal-bottom sm:modal-middle"
                      >
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">Notes!</h3>
                          <p className="py-4">{appointment.notes}</p>
                          <div className="modal-action">
                            <form method="dialog">
                              <button className="btn btn-error text-white">Close</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Missed"
        />
        <div role="tabpanel" className="tab-content p-10">
        <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-center text-base">
                <tr>
                  <th>SL</th>
                  <th>Username</th>
                  <th>Doctor</th>
                  <th>Appointment Date</th>
                  <th>Appointment Type</th>
                  <th>Start Time</th>
                  <th>Status</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody className="font-semibold text-center">
                {/* Rows */}
                {datas.map((appointment, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-base-200" : ""}
                  >
                    <th>{index + 1}</th>
                    <td>{appointment.username}</td>
                    <td>{appointment.doctor_id}</td>
                    <td>{appointment.appointment_date}</td>
                    <td>{appointment.appointment_type}</td>
                    <td>{appointment.start_time}</td>
                    <td>
                    <div className="badge badge-accent">{appointment.status}</div>
                    </td>
                    <td className="flex justify-center">
                      <button
                        className="btn btn-warning text-white"
                        onClick={() =>
                          document.getElementById("my_modal_5").showModal()
                        }
                      >
                        Notes
                      </button>
                      <dialog
                        id="my_modal_5"
                        className="modal modal-bottom sm:modal-middle"
                      >
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">Notes!</h3>
                          <p className="py-4">{appointment.notes}</p>
                          <div className="modal-action">
                            <form method="dialog">
                              <button className="btn btn-error text-white">Close</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Open"
        />
        <div role="tabpanel" className="tab-content p-10">
        <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-center text-base">
                <tr>
                  <th>SL</th>
                  <th>Username</th>
                  <th>Doctor</th>
                  <th>Appointment Date</th>
                  <th>Appointment Type</th>
                  <th>Start Time</th>
                  <th>Status</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody className="font-semibold text-center">
                {/* Rows */}
                {datas.map((appointment, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-base-200" : ""}
                  >
                    <th>{index + 1}</th>
                    <td>{appointment.username}</td>
                    <td>{appointment.doctor_id}</td>
                    <td>{appointment.appointment_date}</td>
                    <td>{appointment.appointment_type}</td>
                    <td>{appointment.start_time}</td>
                    <td>
                    <div className="badge badge-accent">{appointment.status}</div>
                    </td>
                    <td className="flex justify-center">
                      <button
                        className="btn btn-warning text-white"
                        onClick={() =>
                          document.getElementById("my_modal_5").showModal()
                        }
                      >
                        Notes
                      </button>
                      <dialog
                        id="my_modal_5"
                        className="modal modal-bottom sm:modal-middle"
                      >
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">Notes!</h3>
                          <p className="py-4">{appointment.notes}</p>
                          <div className="modal-action">
                            <form method="dialog">
                              <button className="btn btn-error text-white">Close</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="btn border-2 border-black font-bold text-2xl text-black ">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default Appointment;
