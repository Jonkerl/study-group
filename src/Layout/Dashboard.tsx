import { Outlet, useNavigate } from "react-router-dom";
import { tokenStorage } from "../Utils/setup";
import SideBar from "../components/SideBar";
import Main from "../components/Main";
import { IoMenuSharp } from "react-icons/io5";
import {useAuth, useUser, } from "../Hooks/useUser";
import { useEffect, useState } from "react";

export default function Dashboard() {

  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [changeUser, setChangeUser] = useState("");

  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const {setUserEmail} = useUser();

  useEffect(() => {
    if (user && user.loggedIn === false) {
      navigate("/login");
    }
  }, [user.loggedIn, navigate]);

  // const [_, setSearchParams] = useSearchParams();

  return (
    <div className="dashboard-layout">
        <SideBar isOpen={sideBarOpen} setIsOpen={setSideBarOpen}/>
        <Main>
          <div className="nav">
            <IoMenuSharp onClick={()=>setSideBarOpen(true)} className="sidebar-open"/>
            
            <div style={{display:"flex", gap:"10px", marginRight:"10px", alignItems:"center"}}>
              <input style={{padding: "8px"}} value={changeUser} onChange={(e)=> {
                setChangeUser(e.target.value);

              }}/>
              <button className="auth-button-nav" onClick={()=>{
                setUserEmail!(changeUser);
                // setSearchParams({username: changeUser})
              }}>
                  Change User
              </button>
            </div>
            <button className="auth-button-nav" onClick={()=>{
              sessionStorage.removeItem(tokenStorage);
              setUser({loggedIn:false, userData: {email: ""}})
              navigate("/login");
            }}>
              Logout
            </button>
          </div>
          <Outlet/>
        </Main>
        
    </div>
  )
}
