import { loginEndpoint, tokenStorage } from "./setup";

export async function login(email:string, password:string):Promise<{status:"success"|"failed", data: string}>{
  
    try{
        //fetch to api
        const response = await fetch(loginEndpoint, 
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
            const user = await response.json();

            const token = user?.token;

            console.log(token)

            //store the token if success
            sessionStorage.setItem(tokenStorage, token);
            
            //return true
            return {
                status: "success",
                data: token
            }
        }else{
            return {
                status:"failed",
                data: "Wrong credentials."
            }
        }
    }catch(error){
        return {
            status: "failed",
            data: error as string
        }
    } 
}