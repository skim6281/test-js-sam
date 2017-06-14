import moment from 'moment'
import movies from './movies'

const compareByTitle = (a,b) => {
  if (a.title < b.title) {
    return -1;
  }else if (a.title > b.title) {
    return 1;
  } else {
    return 0;
  }
};

const compareByDate = (a,b) => {
  if (a.releaseDate < b.releaseDate) {
    return -1;
  } else if (a.releaseDate > b.releaseDate) {
    return 1;
  } else {
    return 0;
  }
};

export function getPopularMovies () {
  //
  // movies contains the results of two API requests
  //

  //
  // 1. combine the results of these requests
  // 2. sort the results FIRST by year THEN by title
  // 3. each movie object in the results needs a releaseYear attribute added
  //    this is used in src/components/movies-list.js line 25
  //

  const combinedResults = []

  movies.forEach(movieArr => {
    movieArr.forEach(movie => {
      combinedResults.push(movie);
    });
  });

  combinedResults.sort(compareByDate);

  return {
    type: 'GET_MOVIES_SUCCESS',
    movies: combinedResults
  }
}
