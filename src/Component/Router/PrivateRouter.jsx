import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../Provider/Authprovider/AuthProvider";

const PrivateRouter = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
      const from = location.state?.from?.pathname || "/";
    console.log(user)

    if (user?.auth) {
        return children;
    }
    return user?.auth && <Navigate to="/login" state={{from: from}} replace></Navigate>
};

export default PrivateRouter;