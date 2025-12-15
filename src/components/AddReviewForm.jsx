export default function AddReviewForm(){
  return(
    <form action="submit">
      <div className="row g-3 mt-4 justify-content-end jsìustify-items-center">
      
        <div className="col-6">
          <input type="text" className="form-control" placeholder="Name" />
        </div>
      
        <div className="col-6">
          <select type="select" className="form-control" placeholder="Vote">
            <option selected>Vote</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        
        <div className="col-12">
          <textarea name="" id="" className="form-control" placeholder="Leave your comment here!"></textarea>
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