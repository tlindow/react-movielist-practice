var AddMovies = (props) => (
  <form className="add-movies" onSubmit={(e) => {
      e.preventDefault();
      console.log(e.target.value);
      props.addMovie(e.target.value);
    }}>
    <input  className="add-movies-input" type="text" placeholder="Add movie title here"></input>
    <button className="add-movie-button" type="submit" value="Submit">Add</button>
  </form>
)

export default AddMovies;