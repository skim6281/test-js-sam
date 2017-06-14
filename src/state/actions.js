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

const compareByYear = (a,b) => {
  if (a.releaseYear < b.releaseYear) {
    return -1;
  } else if (a.releaseYear > b.releaseYear) {
    return 1;
  } else {
    return 0;
  }
};

const compareByYearTitle = (a,b) => {
  return compareByYear(a,b) || compareByTitle(a,b);
};

function getYear(movieDate) {
  return new Date(movieDate).getFullYear();
}

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
      movie.releaseYear = getYear(movie.releaseDate);
      combinedResults.push(movie);
    });
  });

  combinedResults.sort(compareByDateTitle);

  return {
    type: 'GET_MOVIES_SUCCESS',
    movies: combinedResults
  }
}
