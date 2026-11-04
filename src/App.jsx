import { useState } from "react"
import "./App.css"

const initialCourses = [
  { id: 1, code: "CP312", name: "Algorithm Design/Analysis I" },
  { id: 2, code: "CP317", name: "Software Engineering" },
  { id: 3, code: "CP468", name: "Artificial Intelligence" }
]

const initialEvents = [
  { id: 1, title: "Midterm", type: "exam", courseId: 1, date: "2026-11-18" },
  { id: 2, title: "Assignment 3", type: "assignment", courseId: 2, date: "2026-11-12" },
  { id: 3, title: "Quiz 4", type: "quiz", courseId: 3, date: "2026-11-09" },
  { id: 4, title: "Term Test 2", type: "test", courseId: 2, date: "2026-12-02" },
]
function CourseCard({ course, onDelete }) {
  return (
    <div className="card">
      <h3>{course.code}</h3>
      <p>{course.name}</p>
      <button onClick={() => onDelete(course.id)}>Delete Course</button>
    </div>
  )
}
function App() {

  const [courses, setCourses] = useState(initialCourses)
  const [newCode, setNewCode] = useState("")
  const [newName, setNewName] = useState("")
  const [events, setEvents] = useState(initialEvents)



  function handleAdd() {
    if (newCode === "" || newName === "") return
    const newCourse = {
      id: Date.now(),
      code: newCode,
      name: newName
    }

    setCourses([...courses, newCourse])
    setNewCode("")
    setNewName("")
  }

  function handleDelete(id) {
    setCourses(courses.filter((course) => course.id !== id))
  }

  return (
    <div className="app">
      <h1>Course Planner</h1>
      <p>Track your courses and deadlines.</p>


      <input
        value={newCode}
        onChange={(e) => setNewCode(e.target.value)}
        placeholder="Course Code"
      />

      <input
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Course Name"
      />
      <button onClick={handleAdd}>ADD courses</button>


      {courses.map((course) => (
        <CourseCard key={course.id} course={course} onDelete={handleDelete} />
      ))}

      <h2>Upcoming</h2>
      {events.map((event) => (
        <p key={event.id}>
          {event.date}: {event.type}, {event.title}
        </p>
      ))}
    </div>
  )
}

export default App