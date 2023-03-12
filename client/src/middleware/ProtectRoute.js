import Cookies from "js-cookie";
import { toast, Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";

export const AuthorizeUser = ({children})=>{
    const token = Cookies.get('token');
    if(token){
        return <Navigate to={'/'} replace={true} ></Navigate>
    }
    return children;
}

const ProtectRoute = ({children})=>{
    const token = Cookies.get('token');
    
    if(!token){
        return (
            <>
            {toast.error('log in to access!')}
            <Toaster position="top-center" />
        <Navigate to={'/'} replace={true} ></Navigate>
        </>
        )
    }
    return children;
}

export default ProtectRoute