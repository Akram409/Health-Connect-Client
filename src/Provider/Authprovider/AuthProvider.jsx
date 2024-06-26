import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { message } from "antd";
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserFromLocalStorage = () => {
      setLoading(true);
      const storedUser = localStorage.getItem("loginUser");
      const loggedUser = JSON.parse(storedUser);

      if (storedUser) {
        setUser(loggedUser);
      }

      setLoading(false);
    };
    fetchUserFromLocalStorage();
  }, []);

  const logOut = () => {
    setLoading(true);
    localStorage.removeItem("loginUser");
    setUser(null);
    setLoading(false);
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      const user = response.data;
      localStorage.setItem("loginUser", JSON.stringify(user));
      message.success("Login successful");
      console.log("user", user);
      
      window.location.reload();
    } catch (error) {
      message.error("Invalid Email and Password")
      console.error("Login failed:", error);
    }
  };

  const authInfo = {
    login,
    user,
    setUser,
    loading,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
