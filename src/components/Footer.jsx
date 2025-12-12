import { Link } from "react-router-dom";

export default function Footer(){
  return(
    <div className="container-fluid bg-light p-5">
      <div className="row align-items-center">
        <div className="logo col-8">
          <Link to={"/"}><h1 className="m-0">Movies</h1></Link>
          <p className="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusantium minus architecto officiis omnis repellendus placeat recusandae tempora, praesentium corrupti?</p>
        </div>
        
        <div className="links col-2">
          <ul className="list-unstyled">
            <li><a href="">Home</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">Contacts</a></li>
          </ul>
        </div>

        <div className="d-flex justify-content-evenly social col-2">
          <i className="bi bi-twitter"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-youtube"></i>
          <i className="bi bi-github"></i>
        </div>
      </div>
    </div>
  )
}