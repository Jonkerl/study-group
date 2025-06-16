import getUserFromToken from "./getUserFromToken";
import { tokenStorage } from "./setup"

type getAuthResponseType = {
    status: "success" | "failed",
    user?: string,
    error?: string,
}

export default async function getAuth(): Promise<getAuthResponseType>{
    const token = sessionStorage.getItem(tokenStorage);
    
    if(token){
        const user = getUserFromToken(token);
        
        return {
            status: "success",
            user: user
        } 
    }else{
        //no token in sessionStorage
        return{
            status: "failed",
            error: "Needs to log in again."
        }
    }
}