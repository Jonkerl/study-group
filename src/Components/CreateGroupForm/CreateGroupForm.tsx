import { useState, useContext } from 'react'
import './CreateGroupForm.css'
import { StudyContext } from '../../context/StudyContext'

const CreateGroupForm = () => {
  const { createGroup } = useContext(StudyContext)

  const [course, setCourse] = useState('')
  const [time, setTime] = useState('')
  const [location, setLocation] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (course && time && location) {
      createGroup(course, time, location)
      setCourse('')
      setTime('')
      setLocation('')
    }
    else {
      alert("Please fill in all fields.")
    }
  }

  return (
    <form className="create-group-form" onSubmit={handleSubmit}>
      <h2>Create New Group</h2>
      <input
        type="text"
        placeholder="Course Code or Name"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <input
        type="text"
        placeholder="Meeting Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Create Group</button>
    </form>
  )
}

export default CreateGroupForm
