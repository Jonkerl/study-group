import { useContext, useState, type FormEvent } from "react"
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import signUp from "../Utils/signUp";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../context/UserContext";


export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const user = useContext(userContext);

  function handleSubmit(event: FormEvent){
    event.preventDefault();
    signUp(email, password).then(
      (response)=>{
        if(response.status === "success"){
          navigate("/login");
        }else{
          setError(response.message);
        }
      }
    )
  }

  return (
    <div>
      <h2 className="auth-header">Sign Up {user?.user.userData?.email}</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-div">
          <label className="auth-label" htmlFor="email">Enter Email:</label>
          <input
            className="auth-input"
            id="email"
            autoComplete="email"
            value={email}
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
              autoComplete="current-password"
              value={password}
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
            If registered? <Link to={"/login"}>Login</Link>
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
