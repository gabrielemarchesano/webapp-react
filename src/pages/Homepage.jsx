import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  
  const moviesEndpoint = "http://localhost:3000/api/movies";
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    axios
      .get(moviesEndpoint)
      .then(response => {
        setMovies(response.data);
        /* console.log(response.data); */
      });
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 py-4">
        {
          movies.map((movie) => (
            <div className="col pb-4" key={movie.id}>
              <Link to={`/${movie.id}`}>
                <div className="card">
                  <img src={`http://localhost:3000/${movie.image}`} alt="" className="card-img-top" />
                  <div className="card-body">
                    <h4 className="card-title">{movie.title}</h4>
                    <span className="d-block">{movie.director}</span>
                    <small className="card-text">{movie.genre} - {movie.release_year}</small>
                    <p>{movie.abstract}</p>
                  </div>
                </div>
            </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}