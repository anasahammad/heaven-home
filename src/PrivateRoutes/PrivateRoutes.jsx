import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { RotatingLines} from "react-loader-spinner";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    
    if(loading){
        return <div className="flex justify-center items-center ">
<RotatingLines
  visible={true}
  height="96"
  width="96"
  color="#D23A25"
  strokeColor="#D23A25"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
        </div> 
    }

    if(user){
        return children;
    }
    return <Navigate state={location?.pathname || "/"} to="/login"></Navigate>
};

export default PrivateRoutes;