import { signupEndpoint } from "./setup";

type signUpReturnType = {
    status: "success" | "failed",
    message: string;
}

export default async function signUp(email: string, password: string): Promise<signUpReturnType>{
    try{
        const response = await fetch(signupEndpoint, 
            {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },

                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        )

   
        
        if(response.status === 200){
            return {
                status: "success",
                message: "successful"
            }
        }else{
            return {
                status:"failed",
                message: await response.text()
            }
        }
    }catch(error){
        return {
            status: "failed",
            message: error as string
        }
    }

}