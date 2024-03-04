import { FaHome, FaBirthdayCake } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoChatbubble } from "react-icons/io5";
import { MdBloodtype, MdEmergencyRecording } from "react-icons/md";
import { GiSkullCrossedBones } from "react-icons/gi";

const Profile = () => {
  return (
    <div className="mt-16 space-y-5">
      <h1 className="text-4xl font-semibold">Welcome X</h1>
      <div>
        <div className="card card-side bg-base-100 shadow-2xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
              className="w-full h-full"
            />
          </figure>
          <div className="card-body">
            <div className="grid grid-cols-1 space-y-6" >
              <div>
                <h1 className="text-4xl font-bold">X</h1>
              </div>
              <div>
                <div className="grid grid-cols-5">
                  <div className="">
                    <h1 className="text-[#a2a2a2] font-semibold">GENDER</h1>
                    <p className="font-semibold text-xl">Male</p>
                  </div>
                  <div className="">
                    <h1 className="text-[#a2a2a2] font-semibold">RELIGION</h1>
                    <p className="font-semibold text-xl">Muslim</p>
                  </div>
                  <div className="">
                    <h1 className="text-[#a2a2a2] font-semibold">
                      MARTIAL STATUS
                    </h1>
                    <p className="font-semibold text-xl">Single</p>
                  </div>
                  <div className="">
                    <h1 className="text-[#a2a2a2] font-semibold">ETHNICITY</h1>
                    <p className="font-semibold text-xl">Asia</p>
                  </div>
                  <div className="">
                    <h1 className="text-[#a2a2a2] font-semibold">
                      EMAIL ADDRESS
                    </h1>
                    <p className="font-semibold text-xl">xyz@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 ">
                <div className="1">
                  <div className="flex justify-start items-center gap-3 mb-3">
                    <div>
                      <FaHome size="2em" />
                    </div>
                    <div>
                      <h1 className="text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos deserunt numquam
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-3">
                    <div>
                      <IoMdCall size="2em" />
                    </div>
                    <div>
                      <h1>12345</h1>
                    </div>
                  </div>
                </div>
                <div className="2">
                  <div className="flex justify-start items-center gap-3 mb-3">
                    <IoChatbubble size="2em" />
                    <h1 className="text-sm">English,Hindi,France</h1>
                  </div>
                  <div className="flex justify-start items-center gap-3">
                    <div>
                      <FaBirthdayCake size="2em" />
                    </div>
                    <div>
                      <h1>June 10 1990</h1>
                    </div>
                  </div>
                </div>

                <div className="3">
                  <div className="flex justify-start items-center gap-3 mb-3">
                    <div>
                      <MdBloodtype size="2em" color="red" />
                    </div>
                    <div>
                      <h1 className="text-3xl font-semibold text-[#a2a2a2]">
                        O+
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-3">
                    <div>
                      <MdEmergencyRecording size="2em" />
                    </div>
                    <div>
                      <h1>Emergency Contact</h1>
                    </div>
                  </div>
                </div>
                <div className="4">
                  <div className="flex justify-start items-center gap-3 mb-3">
                    <GiSkullCrossedBones size="2em" />
                    <h1 className="text-sm">Eallergy</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
