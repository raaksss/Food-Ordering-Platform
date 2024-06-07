import { useCreateMyUser } from "@/api/MyUserApi";
import {useAuth0} from "@auth0/auth0-react"
import { useEffect } from "react";
const AuthCallbackPage=()=>{
const {user}= useAuth0();
const {createUser}=useCreateMyUser(); 

useEffect(()=>{
    if(user?.sub && user?.email){
        createUser({auth0Id: user.sub, email:user.email});
    }
},[])
}
export default AuthCallbackPage;