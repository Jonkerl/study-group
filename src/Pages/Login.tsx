import { useContext, useState, type FormEvent } from "react"
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { login } from "../Utils/login";
import getUserFromToken from "../Utils/getUserFromToken";
import { userContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const user = useContext(userContext);

  //handle login and redirect
  async function handleSubmit(event:FormEvent){
    try{
      //prevent default render
      event.preventDefault();

      //calls login function to make api call
      const response = await login(email, password);

      //if positive response
      if(response.status === "success"){
        //get the user data
        const userData = getUserFromToken(response.data);
        
        //set the user data
        user?.setUser({loggedIn: true, userData:{email: userData.user}})

        //move to home
        navigate("/");
      }else{
        setError(response.data);
      }
    }catch(e){
      console.error(e);
    }
  
  }

  return (
    <div>
      <h2 className="auth-header">Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="auth-div">
          <label className="auth-label" htmlFor="email">Enter Email:</label>
          <input
            className="auth-input"
            id="email"
            value={email}
            autoComplete="email"
            type="email"
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className="auth-div">
          <label className="auth-label" htmlFor="password">Enter Password:</label>
          <div className="auth-password">
            <input
              className="auth-input"
              id="password"
              value={password}
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              onChange={(e)=> setPassword(e.target.value)}
            />
            <div onClick={()=>{
              setShowPassword(!showPassword)
            }} className="auth-toggler">
              {
                showPassword
                ?
                <IoEyeOffSharp />
                :
                <IoEyeSharp />
              }
            </div>
          </div>

        </div>
        <div className="auth-stuffs">
          <p className="auth-redirect-link">
            If not registered? <Link to={"/signup"}>Sign up</Link>
          </p>
          <button className="auth-button">
            Submit
          </button>
          {error && <p className="error">{error}</p>}
        </div>
        
      </form>
    </div>
  )
}
