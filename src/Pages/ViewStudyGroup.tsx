import { useContext, useEffect, useState } from "react";
import CourseFilter from "../components/CourseFilter/CourseFilter";
import { StudyContext, type StudyGroup } from "../context/StudyContext";
import GroupCard from "../components/GroupCard/GroupCard";


export default function ViewStudyGroup() {

  const { groups } = useContext(StudyContext)
  
  const [searchTerm, setSearchTerm] = useState("")

  const [filteredGroup, setFilteredGroup] = useState<StudyGroup[]>([]);

  useEffect(()=>{
    
    const filteredGroups = groups.filter(group =>
      group.courseTitle.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setFilteredGroup(filteredGroups);

  },[searchTerm, groups])

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
