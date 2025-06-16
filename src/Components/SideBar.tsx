import { type Dispatch, type SetStateAction } from "react";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useUser } from "../Hooks/useUser";

type sideBarProps = {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function SideBar({isOpen, setIsOpen}: sideBarProps) {


  function closeSideBar(){
    setIsOpen(false);
  }

  const {userEmail} = useUser();

  return (
    <div className={`sidebar ${isOpen ? "sidebar-active" : "sidebar-unactive"}`}>
      <div className="sidebar-header">
        <p className="">Study Group</p>
        <button className="close-sidebar" onClick={closeSideBar}>
          <CgClose/>
        </button>
      </div>
      <div className="sidebar-links">
        <Link to="/" onClick={closeSideBar}>
          Home
        </Link>
        <Link to="/view-groups" onClick={closeSideBar}>
          View Groups
        </Link>
        <Link to={"/view-groups/my?username=" + userEmail} onClick={closeSideBar}>
          Created Groups
        </Link>
      </div>
    </div>
  )
}
