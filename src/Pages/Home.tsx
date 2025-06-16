
import { Link } from "react-router-dom";
import {useUser} from "../Hooks/useUser";
import { IoAddCircleOutline } from "react-icons/io5";
import { useState } from "react";
import CreateGroupForm from "../components/CreateGroupForm/CreateGroupForm";

export default function Home() {
    const {userEmail} = useUser();

    const [showForm, setShowForm] = useState(false);
    
  return (
    <div className="home">
        {showForm && <CreateGroupForm setShowForm={setShowForm}/>}
        <h1>Welcome {userEmail}</h1>
        <div className="add-group" onClick={() => setShowForm(true)}>
            Create a new study group
            <IoAddCircleOutline className="add-icon" />
        </div>
        <div className="nav-card-container">
            <div className="nav-card">
                <Link to={"/view-groups"}>
                    View All Study Groups
                </Link>
            </div>

            
            <div className="nav-card">
                <Link to={"/view-groups/my?username=" + userEmail}>
                    View All Study Groups Created By You
                </Link>
            </div>
        </div>
    </div>
  )
}
