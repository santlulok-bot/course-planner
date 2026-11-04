const courses = [
  {id: "1", code: "CP312", name: "Algorithm Design/Analysis I"},
  {id: "2", code: "CP317", name: "Software Enginering"},
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
  return (
    <div> 
    <h1>Course Planner</h1>
    <p>Track your courses and deadlines.</p>
    {courses.map ((course) => (
      <CourseCard key={course.id} course={course} />
    ))}
    </div>
  )
}

export default App