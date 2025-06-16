import { createContext, useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from "react"
import { login } from "../Utils/login";
import getAuth from "../Utils/getAuth";


type userType = {
    loggedIn?: boolean;
    userData?: {
        email: string;
    }
}

type contextValueType = {
    user: userType;
    setUser: Dispatch<SetStateAction<userType>>,
    login: (email: string, password: string) => Promise<{ status: "success" | "failed"; data: string; }>;
}

export const userContext = createContext<contextValueType | null>(null)

export default function UserContext({children}:{children:ReactNode}) {
    const [user, setUser] = useState<userType>({})

    //sets user to be logged in if getauth is successful
    // this is called when the app loads not when state changes
    useEffect(()=>{
        getAuth().then(
          response => {
            if(response.status === "success" && response.user){
              setUser({loggedIn: true, userData:{email: response.user}});
            }else{
                setUser({loggedIn: false, userData: {email: ""}});
            }
          }
        )    
    }, [])
    
    
    return (
        <userContext.Provider value={{user, setUser, login}}>
            {children}
        </userContext.Provider>
    )
}
