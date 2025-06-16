import { Outlet, useNavigate } from "react-router-dom";
import "../Auth.css"
import AuthImage from "../assets/Auth.png"
import {useAuth} from "../Hooks/useUser";
import { useEffect } from "react";

export default function Auth() {

  const navigate = useNavigate();
  const {user} = useAuth();

  useEffect(() => {
    if (user && user.loggedIn) {
      navigate("/");
    }
    
  }, [user.loggedIn, navigate])

  return (
    <div className="auth-layout">
        <div className="auth-sidebar auth-image-container">
          <img className="auth-image" src={AuthImage}/>
        </div>
        <div className="auth-sidebar auth-main">
          <Outlet/>
        </div>
    </div>
  )
}
