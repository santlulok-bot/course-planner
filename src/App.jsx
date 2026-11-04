import {useState} from "react"

const initialCourses = [
  {id: "1", code: "CP312", name: "Algorithm Design/Analysis I"},
  {id: "2", code: "CP317", name: "Software Engineering"},
  {id: "3", code: "CP468", name: "Artificial Intelligence"}
]
function CourseCard({course}) {
  return (
    <div> 
      <h3>{course.code}</h3>
      <p>{course.name}</p>
    </div>
  )
}
function App(){

  const [courses, setCourses] = useState(initialCourses)
  const [newCode, setNewCode] = useState("")
  const [newName, setNewName] = useState("")
  
  

    function handleAdd(){
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

return (
    <div> 
    <h1>Course Planner</h1>
    <p>Track your courses and deadlines.</p>


    <input
      value ={newCode}
      onChange={(e) => setNewCode(e.target.value)}
      placeholder="Course Code"
    />

    <input
      value ={newName}
      onChange={(e) => setNewName(e.target.value)}
      placeholder="Course Name"
    />
    <button onClick={handleAdd}>ADD courses</button>

    {courses.map ((course) => (
      <CourseCard key={course.id} course={course} />
    ))}
    </div>
  )
}

export default App