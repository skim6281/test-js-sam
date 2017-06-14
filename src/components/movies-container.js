import React from 'react'
import { connect } from 'react-redux'

function renderMovies(movies) {
  window.movies = movies;
  return movies.map((movie, ind) => {
    return(
      <li key={ind}>
        <div className="img-container">
          <img src={movie.image}/>
        </div>
        <section>
          <h2>{movie.title}</h2>
          <h3>Price: ${movie.price}</h3>
          <span>Year: {movie.releaseYear}</span>
        </section>
      </li>
    )
  });
}

export function MoviesContainer(props) {
  return (
    <div>
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
