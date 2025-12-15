import axios from "axios";
import { useState } from "react"

export default function AddReviewForm({movieId}){

  function handleSubmit(event){
    /* event.preventDefault(); */
    console.log(formData);

    axios.post(`http://localhost:3000/api/movies/${movieId}`, formData)
      .then((response) => {
        console.log("Review posted successfully", response.data);
        setFormData(initialForm);
      })
  }

  const initialForm = {
    name: "",
    vote: 0,
    text: ""
  }

  const [ formData, setFormData ] = useState(initialForm);

  return(
    <form onSubmit={handleSubmit}>
      <div className="row g-3 mt-4 justify-content-end jsìustify-items-center">
      
        <div className="col-6">
          <input type="text" className="form-control" name="name" id="name" required placeholder="Name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })}/>
        </div>
      
        <div className="col-6">
          <select type="select" className="form-control" placeholder="Vote" name="vote" id="vote" value={formData.vote} onChange={(event) => setFormData({ ...formData, vote: event.target.value })}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        
        <div className="col-12">
          <textarea 
            name="text" 
            id="text" 
            className="form-control" 
            placeholder="Leave your comment here!" 
            value={formData.text} 
            onChange={(event) => setFormData({ ...formData, text: event.target.value })}
          ></textarea>
        </div>

        <div className="">
          <button type="submit" className="btn btn-success">
            Post
          </button>
        </div>
      </div>
    </form>
  )
}