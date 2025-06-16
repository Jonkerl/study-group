import { useContext } from "react";
import { StudyContext, type StudyGroup } from "../../context/StudyContext";
import "./GroupCard.css";

type Props = {
  group: StudyGroup;
};

const GroupCard = ({ group }: Props) => {
  const { userEmail, joinGroup, leaveGroup } = useContext(StudyContext);

  const isMember = group.members.includes(userEmail);
  const isFull = group.members.length >= group.maxSize;

  return (
    <div className="group-card">
      <h3>{group.courseTitle}</h3>
      <p>Time: {group.time}</p>
      <p>Location: {group.location}</p>
      <p>
        Members: {group.members.length}/{group.maxSize}
      </p>

      {isMember ? (
        <button className="leave-btn" onClick={() => {leaveGroup(group.id); console.log("click leave")}}>
          Leave
        </button>
      ) : (
        <button
          className="join-btn"
          onClick={() => joinGroup(group.id)}
          disabled={isFull}
        >
          {isFull ? "Full" : "Join"}
        </button>
      )}
    </div>
  );
};

export default GroupCard;
