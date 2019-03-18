var Search = (props) => (
  <form className="search">
    <input onChange={(e) => (props.searchMovieList(e.target.value))} className="search-input" type="text" placeholder="Search..."></input>
    <button className="search-button" type="submit" value="submit">Go</button>
  </form>
)

export default Search;