import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function MoviePage(){
  
  const { id } = useParams();
  const movieEndpoint = `http://localhost:3000/api/movies/${id}`
  const [ movie, setMovie ] = useState([]);

  useEffect(() => {
    axios
      .get(movieEndpoint)
      .then(response => {
        setMovie(response.data)
      });
  }, []);

  return(
    <div className="container">  
      <div className="d-flex justify-content-center">
      
      <div className="card movie-card my-5">
        <div className="row">
          <div className="col-4">
            <img src={`http://localhost:3000/${movie.image}`} alt="" className="card-img-top"/>
          </div>
          <div className="col-8">
            <div className="card-body">
              <h2 className="card-title">{movie.title}</h2>
              <p className="card-text">{movie.abstract}</p>
              <small>{movie.director} - {movie.release_year} - {movie.genre}</small>
            </div>
          </div>
        </div>
      </div>
      </div>
    <div className="reviews">
        {
          movie.reviews.map((review) => (
            <div className="card reviews-card">
              <span>{review.vote} <i class="bi bi-star-fill"/> - {review.name}</span>
              <div className="card-body">
                <p className="card-text">"{review.text}"</p>
              </div>
            </div>
          ))
        }
    </div>
    </div>
  )
}