let movies = [
  {
    movieId: 1,
    title: "Inception",
    genre: "Sci-Fi",
    director: "Christopher Nolan",
  },
  {
    movieId: 2,
    title: "The Shawshank Redemption",
    genre: "Drama",
    director: "Frank Darabont",
  },
  {
    movieId: 3,
    title: "The Godfather",
    genre: "Crime",
    director: "Francis Ford Coppola",
  },
];

function getAllMovies() {
  return movies;
}

function getMovieById(movieId) {
  return movies.find((movie) => movie.movieId === movieId);
}

module.exports = {
  getAllMovies,
  getMovieById,
};
