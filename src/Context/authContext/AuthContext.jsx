import { createContext, useContext } from "react";
import Cookie from "universal-cookie";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const cookies = new Cookie();
  
  return (
    <AuthContext.Provider value={{authInfo: cookies.get("authInfo")}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const {authInfo} = useContext(AuthContext);
  if (authInfo === undefined) {
    return false;
  } else {
    return authInfo;
  }
};
