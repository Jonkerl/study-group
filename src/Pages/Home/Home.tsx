import { useContext, useState } from 'react'
import { StudyContext } from '../../context/StudyContext'
import GroupCard from '../../components/GroupCard/GroupCard'
import CreateGroupForm from '../../components/CreateGroupForm/CreateGroupForm'
import CourseFilter from '../../components/CourseFilter/CourseFilter'
import './Home.css'

const Home = () => {
  const { groups, userEmail, setUserEmail } = useContext(StudyContext)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredGroups = groups.filter(group =>
    group.course.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="home-container">
      <div className="switch-user">
        <label>Current User: </label>
        <input
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <h1>Study Group Finder</h1>
      <CreateGroupForm />
      <CourseFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="group-list">
        {filteredGroups.length === 0 ? (
          <p>No matching groups found.</p>
        ) : (
          filteredGroups.map(group => (
            <GroupCard key={group.id} group={group} />
          ))
        )}
      </div>
    </div>
  )
}

export default Home
