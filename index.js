let express = require("express");
let cors = require("cors");
let { getAllMovies, getMovieById } = require("./controllers");
let app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json("Welcome to Movies API");
});

app.get("/movies", (req, res) => {
  let movies = getAllMovies();
  res.status(200).json({ movies });
});

app.get("/movies/details/:movieId", (req, res) => {
  let movieId = parseInt(req.params.movieId);
  let movie = getMovieById(movieId);
  if (!movie) return res.status(404).json({ message: "Movie not found" });
  res.status(200).json({ movie });
});

module.exports = {
  app,
};
