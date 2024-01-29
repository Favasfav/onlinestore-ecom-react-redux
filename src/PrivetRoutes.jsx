import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
 

const user = useSelector((state) => state.user.user);
if (user){
   return props.children
}
else{
<Navigate to="/login" />
}
 
  
};
export default PrivateRoute;