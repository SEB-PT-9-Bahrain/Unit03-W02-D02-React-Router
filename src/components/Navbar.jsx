import { Link } from "react-router"
function Navbar() {
  return (
    <div>
        <Link to='/'>Homepage</Link>
        <Link to='/students'>All Students</Link>
        <Link to='/students/create'>Create new Student</Link>
    </div>
  )
}

export default Navbar