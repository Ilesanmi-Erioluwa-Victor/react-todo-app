import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
   const location = useLocation();
   console.log(useSelector(state=>state.AuthReducer))
   const auth = useSelector((state) => state.AuthReducer.isAuth);
   console.log("Hi", auth)

   if(!auth) {
    return <Navigate to="/login" replace state={{ from: location }} />;
   }

    return children;
}

export default PrivateRoute;