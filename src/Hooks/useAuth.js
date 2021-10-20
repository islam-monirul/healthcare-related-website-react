import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider";

const useAuth = () => {
     const contextValues = useContext(AuthContext);
     return contextValues;
}

export default useAuth;