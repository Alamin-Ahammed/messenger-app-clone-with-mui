import { createContext, useContext, useState } from "react";
import Cookies from "universal-cookie";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const cookies = new Cookies();
  const [authInfo, setAuthInfo] = useState(cookies.get("authInfo"));
  if (authInfo) {
    cookies.set("authInfo", authInfo);
  }
  
  return (
    <AuthContext.Provider value={{authInfo, setAuthInfo}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthInfo = () => {
  const {authInfo, setAuthInfo} = useContext(AuthContext);
  return {authInfo, setAuthInfo};
};
