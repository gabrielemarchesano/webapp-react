import { Link, NavLink } from "react-router-dom";

export default function Navbar(){
  return(
    <div className="d-flex justify-content-between bg-light container-fluid py-2 px-4">

        <Link to={"/"}><h3 className="m-0">Movies</h3></Link>

      <div className="links">
        <ul className="list-unstyled list-group">
          <NavLink to="/"><li className="list-group-item">Home</li></NavLink>
        </ul>
      </div>
    </div>
  )
}