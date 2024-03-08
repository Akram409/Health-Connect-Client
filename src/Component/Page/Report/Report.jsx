
import Profile from "../../Share/Profile/Profile";
import { FiDownload } from "react-icons/fi";
import { useEffect, useState } from "react";

const Report = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/healthconnect.patient_healthreport.json");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-16 mb-40">
      <Profile />
      <div className="mt-28">
        <h1 className="text-5xl font-semibold ms-5 mb-10">Reports</h1>
        <div className="overflow-x-auto">
          <table className="table table-pin-rows table-pin-cols">
            {/* head */}
            <thead className="text-center text-base">
              <tr>
                <th>SL</th>
                <th>Title</th>
                <th>Date</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody className="font-semibold text-center">
              {/* Rows */}
              {datas.map((report, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-base-200" : ""}>
                  <th>{index + 1}</th>
                  <td>{report.username}</td>
                  <td>{new Date(report.date).toLocaleDateString()}</td>
                  <td className="flex justify-center">
                    <a href={report.health_report} target="_blank" rel="noopener noreferrer">
                      <FiDownload size="2.5em" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Report;
