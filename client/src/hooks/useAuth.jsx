import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAuth = () => {
  const userInfo = useContext(AuthContext);
  return userInfo;
};

export default useAuth;
