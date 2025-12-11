import { Link, NavLink } from "react-router-dom";

export default function Navbar(){
  return(
    <div className="d-flex justify-content-between bg-light container-fluid py-2 px-4">
      <div className="brand">
        <h3>Movies</h3>
      </div>
      <div className="links">
        <ul className="list-unstyled list-group">
          <NavLink to="/"><li className="list-group-item">Home</li></NavLink>
        </ul>
      </div>
    </div>
  )
}