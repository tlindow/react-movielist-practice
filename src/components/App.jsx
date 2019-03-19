import movies from "../data/exampleMovieData.js";
import NavBar from "./NavBar.js";
import AddMovies from "./AddMovies.js";
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

    var filteredTitles = movieTitles.filter((title) => {
      return title.includes(query);
    });

    var filteredMovies = [];
    for (var i = 0; i < movies.length; i++) {
      for (var j = 0; j < filteredTitles.length; j++) {
        if (movies[i].title === filteredTitles[j]) {
          filteredMovies.push(movies[i]);
        }
      }
    }
 
    this.setState({
      movies: filteredMovies
    });
  }

  addMovie (entry) {
    var newMovie = {
      title: entry
    };
    var moviesCopy = movies.slice();
    moviesCopy.push(newMovie);
    console.log(movies);
    this.setState({
      movies: moviesCopy
    });
  }

  render() {
    return <div>
      <NavBar />
      <AddMovies addMovie={this.addMovie.bind(this)}/>
      <Search searchMovieList={this.searchMovieList.bind(this)}/>
      <MovieList movies={this.state.movies} />
    </div>
  }

}

export default App;