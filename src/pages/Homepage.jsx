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
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        {
          movies.map((movie) => (
            <Link to={`/${movie.id}`}>
            <div className="col" key={movie.id}>
              <h1>{movie.title}</h1>
              <h2>{movie.director}</h2>
              <small>{movie.genre} - {movie.release_year}</small>
              <p>{movie.abstract}</p>
            </div>
            </Link>
          ))
        }
      </div>
    </>
  )
}