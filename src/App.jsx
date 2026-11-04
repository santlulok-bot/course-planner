const courses = ["CP312", "CP317", "CP468"]

function App(){
  return (
    <div> 
    <h1>Course Planner</h1>
    <p>Track your courses and deadlines.</p>
    <ul>
      {courses.map((course) => (
        <li key={course}>{course}</li>
      ))}
    </ul>
    </div>
  )
}

export default App