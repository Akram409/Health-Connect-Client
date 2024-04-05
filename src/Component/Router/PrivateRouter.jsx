import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider/AuthProvider";

const PrivateRouter = ({ children,loggedInRedirect  }) => {
    const { user } = useContext(AuthContext);  

    if (!user && loggedInRedirect) {
        return <Navigate to="/login" replace={true}/>;
    }
    
    if (user && !loggedInRedirect) {
        return <Navigate to="/" replace={true}/>;
    }
    return children;
};

export default PrivateRouter;