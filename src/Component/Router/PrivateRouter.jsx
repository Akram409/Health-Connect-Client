import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../Provider/Authprovider/AuthProvider";

const PrivateRouter = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
      const from = location.state?.from?.pathname || "/";
    console.log(user)

    if (user ) {
        return children;
    }
    return <Navigate to="/login" state={{from: from}}></Navigate>
};

export default PrivateRouter;