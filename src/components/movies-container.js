import React from 'react'
import { connect } from 'react-redux'

function renderMovies(movies) {
  window.movies = movies;
  return movies.map((movie, ind) => {
    return(
      <li key={ind}>
        {movie.title}
      </li>
    )
  });
}

export function MoviesContainer(props) {
  return (
    <div>
      <h1>TODO :)</h1>
      <ul>
        {renderMovies(props.movies)}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(MoviesContainer)
