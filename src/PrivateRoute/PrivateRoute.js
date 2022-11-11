import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
   const location = useLocation();
   const auth = useSelector( state => state.AuthReducer.isAuth);
}