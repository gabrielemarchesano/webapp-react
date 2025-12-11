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
    <>
      <h1>{movie.title}</h1>
    </>
  )
}