import { useParams } from "react-router"
import { useState, useEffect } from "react"
import axios from 'axios'
function StudentDetails() {
    const [ student, setStudent ] = useState(null)
    const {studentId} = useParams()

    async function getStudent(){
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/students/${studentId}`)
        setStudent(response.data)
    }

    useEffect(()=>{
        getStudent()
    },[])
  return (
    <div>
        <h1>Student Details</h1>

        {student ? (<>
            <h2>Name: {student.name}</h2>
            <p>Course: {student.course}</p>
            <p>City: {student.city}</p>
        </>) : <h2>Loading...</h2>}

    </div>
  )
}

export default StudentDetails