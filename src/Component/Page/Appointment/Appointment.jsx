import Profile from "../../Share/Profile/Profile";

const Appointment = () => {
  return (
    <div className="mx-16 mb-40 ">
      <Profile />
      <div
        role="tablist"
        className="tabs tabs-bordered justify-center justify-items-center font-bold tabs-lg w-full mt-16 "
      >
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Upcoming"
        />
        <div role="tabpanel" className="tab-content p-10">
          There is no Upcoming Appointments.
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Missed"
          checked
        />
        <div role="tabpanel" className="tab-content p-10">
          There is no Missed Appointments.
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Open"
        />
        <div role="tabpanel" className="tab-content p-10">
          There is no Open Appointments.
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
