import { FaHome, FaBirthdayCake } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoChatbubble } from "react-icons/io5";
import { MdBloodtype, MdEmergencyRecording } from "react-icons/md";
import { GiSkullCrossedBones } from "react-icons/gi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/Authprovider/AuthProvider";

const Profile = () => {
  const {user} = useContext(AuthContext)
  const [usersData, setUsersData] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/user/${user.email}`);
        if (response.ok) {
          const userData = await response.json();
          // console.log(usersData?)
          setUsersData(userData.user);
        } else {
          throw new Error('Failed to fetch user data');
        }
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <div className="mt-16 space-y-5">
      <h1 className="text-4xl font-semibold">Welcome {usersData?.name}</h1>
      <div>
        <div className=" md:card md:card-side bg-base-100 shadow-2xl flex-none">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
              className="w-full h-full px-10 md:px-0"
            />
          </figure>
          <div className="card-body">
            <div className="grid grid-cols-1 space-y-6" >
              <div>
                <h1 className="text-4xl font-bold">{usersData?.name}</h1>
              </div>
              <div>
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-5">
                  <div className="">
                    <h1 className="text-[#a2a2a2] font-semibold">GENDER</h1>
                    <p className="font-semibold text-xl">{usersData?.gender}</p>
                  </div>
                  <div className="">
                    <h1 className="text-[#a2a2a2] font-semibold">RELIGION</h1>
                    <p className="font-semibold text-xl">{usersData?.religion}</p>
                  </div>
                  <div className="">
                    <h1 className="text-[#a2a2a2] font-semibold">
                      MARTIAL STATUS
                    </h1>
                    <p className="font-semibold text-xl">{usersData?.status}</p>
                  </div>
                  <div className="">
                    <h1 className="text-[#a2a2a2] font-semibold">ETHNICITY</h1>
                    <p className="font-semibold text-xl">Asia</p>
                  </div>
                  <div className="">
                    <h1 className="text-[#a2a2a2] font-semibold">
                      EMAIL ADDRESS
                    </h1>
                    <h1 className="font-semibold text-sm">{usersData?.email}</h1>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <div className="1">
                  <div className="flex justify-start items-center gap-3 mb-3">
                    <div>
                      <FaHome size="2em" />
                    </div>
                    <div>
                      <h1 className="text-xs">
                      {usersData?.address?.street}, {usersData?.address?.city}, {usersData?.address?.state}, {usersData?.address?.postalCode}
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-3">
                    <div>
                      <IoMdCall size="2em" />
                    </div>
                    <div>
                      <h1>{usersData?.phone}</h1>
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
                      <h1>{usersData?.dob}</h1>
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
                      {usersData?.bloodGroup}
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-3">
                    <div>
                      <MdEmergencyRecording size="2em" />
                    </div>
                    <div>
                      <h1>{usersData?.emergency}</h1>
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
