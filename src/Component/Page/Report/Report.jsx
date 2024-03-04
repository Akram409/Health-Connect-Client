import { Link } from "react-router-dom";
import Profile from "../../Share/Profile/Profile";
import { FiDownload } from "react-icons/fi";

const Report = () => {
  return (
    <div className="mx-16 mb-40">
      <Profile />
      <div className="mt-28">
        <h1 className="text-5xl font-semibold ms-5 mb-10">Reports</h1>
        <div className="overflow-x-auto">
          <table className="table">
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
              {/* row 1 */}
              <tr className="bg-base-200">
                <th>1</th>
                <td>Full Body Checkup</td>
                <td>10-01-2022</td>
                <td className="flex justify-center">
                  <Link to="/">
                    <FiDownload size="2.5em" />
                  </Link>
                </td>
              </tr>
              <tr>
                <th>2</th>
                <td>Full Body Checkup</td>
                <td>20-01-2022</td>
                <td className="flex justify-center">
                  <Link to="/">
                    <FiDownload size="2.5em" />
                  </Link>
                </td>
              </tr>
              <tr className="bg-base-200">
                <th>3</th>
                <td>X-Ray Imaging</td>
                <td>11-01-2022</td>
                <td className="flex justify-center">
                  <Link to="/">
                    <FiDownload size="2.5em" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Report;
