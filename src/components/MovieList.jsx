import MovieListEntry from "./MovieListEntry.js";

var MovieList = (props) => (
  <div className="movielist">
    {props.movies.map(movie => {
      return <MovieListEntry key={movie.title} movie={movie} />
    })}
  </div>
)

export default MovieList;