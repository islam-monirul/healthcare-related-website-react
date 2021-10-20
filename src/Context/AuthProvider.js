import { createContext } from "react"
import useFirebase from "../Hooks/useFirebase";

// create context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
     // call useFirebase
     const allContext = useFirebase();
     
     return (
          <AuthContext.Provider value={allContext}>
               {children}
          </AuthContext.Provider>
     );
}

export default AuthProvider;