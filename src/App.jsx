import { Route, Routes } from "react-router"
import Homepage from './pages/Homepage'
import StudentList from './pages/StudentsList'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/students" element={<StudentList/>} />
      </Routes>
    </div>
  )
}

export default App