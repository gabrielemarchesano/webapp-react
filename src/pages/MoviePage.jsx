import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import AddReviewForm from "../components/AddReviewForm";

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
    <div className="container py-5">  
      
      <div className="d-flex justify-content-center">     
        <div className="card movie-card shadow-sm mb-5">
          <div className="row">
            <div className="col-4">
              <img src={`http://localhost:3000/${movie.image}`} alt="" className="card-img-top movie-cover"/>
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
    
    <div className="reviews d-flex gap-5 justify-content-center">
      {
        movie.reviews?.map((review) => (
          <div className="card reviews-card shadow mb-3 p-2" key={review.id}>
            <span>{review.vote} <i className="bi bi-star-fill reviews-star"/> - {review.name}</span>
            <div className="card-body px-0">
              <p className="card-text fst-italic">"{review.text}"</p>
            </div>
          </div>
        ))
      }
    </div>
    
    <div className="add-review">
      <h3 className="text-center">Leave your review!</h3>
      <AddReviewForm movieId={id}/>
    </div>
  </div>
  )
}