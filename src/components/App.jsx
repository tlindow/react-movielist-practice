import movies from "../data/exampleMovieData.js";
import NavBar from "./NavBar.js"
import MovieList from "./MovieList.js";
import Search from "./Search.js";

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      movies: movies
    }
  }

  searchMovieList (query) {
    var movieTitles = movies.map((movie) => {
      return movie.title;
    });
    if (movieTitles.includes(query)) {
      this.setState({
        movies: [movies[0]]
      })
    } else {
      this.setState({
        movies: movies
      })
    }
  }

  render() {
    return <div>
      <NavBar />
      <Search searchMovieList={this.searchMovieList.bind(this)}/>
      <MovieList movies={this.state.movies} />
    </div>
  }

}

export default App;