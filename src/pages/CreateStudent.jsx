import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router"
function CreateStudent() {
  const [ formData, setFormData ] = useState({
    name:'',
    course:'',
    city:''
  })
  const navigate = useNavigate()

  function handleChange(event){
    setFormData({...formData,[event.target.name]:event.target.value})
  }

  async function handleSubmit(event){
    event.preventDefault()
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/students`,formData)

    navigate('/students') // Redirects the user to /students when the form is submitted
  }
  return (
    <div>
      <h1>Create Student</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
        type="text" 
        onChange={handleChange}
        value={formData.name}
        name="name"
        id="name"
        />

        <label htmlFor="name">Course:</label>
        <input 
        type="text" 
        onChange={handleChange}
        value={formData.course}
        name="course"
        id="course"
        />

        <label htmlFor="city">City:</label>
        <input 
        type="text" 
        onChange={handleChange}
        value={formData.city}
        name="city"
        id="city"
        />

        <button>Create Student</button>
      </form>
    </div>
  )
}

export default CreateStudent