import './CourseFilter.css'

type Props = {
  searchTerm: string
  setSearchTerm: (term: string) => void
}

const CourseFilter = ({ searchTerm, setSearchTerm }: Props) => {
  return (
    <div className="course-filter">
      <input
        type="text"
        placeholder="Search by course or department..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}

export default CourseFilter
