import { Route, Routes } from "react-router"
import Homepage from './pages/Homepage'
import StudentList from './pages/StudentsList'
import CreateStudent from "./pages/CreateStudent"
// Exercise 1:
// 1. Make CreateStudent.jsx component
// 2. make the route for it in the App.jsx at /students/create
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/students" element={<StudentList/>} />
        <Route path="/students/create" element={<CreateStudent/>}/>
      </Routes>
    </div>
  )
}

export default App