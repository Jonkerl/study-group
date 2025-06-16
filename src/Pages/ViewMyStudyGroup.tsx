import { useContext, useEffect, useState } from "react";
import CourseFilter from "../components/CourseFilter/CourseFilter";
import { StudyContext, type StudyGroup } from "../context/StudyContext";
import GroupCard from "../components/GroupCard/GroupCard";


export default function ViewMyStudyGroup() {

  const { groups, userEmail } = useContext(StudyContext)
  
  const [searchTerm, setSearchTerm] = useState("")

  const [filteredGroup, setFilteredGroup] = useState<StudyGroup[]>([]);

  useEffect(()=>{
    
    let myGroups = groups.filter(group => group.members.includes(userEmail));
    
    const filteredGroups = myGroups.filter(group =>
      group.courseTitle.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setFilteredGroup(filteredGroups);


  },[userEmail, groups, searchTerm])

  //make api call to get 
  return (
    <>
      <div>
        <CourseFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="group-list">
          {filteredGroup.length === 0 ? (
            <p>No matching groups found.</p>
          ) : (
            filteredGroup.map(group => (
              <GroupCard key={group.id} group={group} />
            ))
          )}
        </div>
      </div>
    </>
  )
}
