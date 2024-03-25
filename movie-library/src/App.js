import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Movie 1",
      description: "Description for Movie 1",
      posterURL: "#",
      rating: 9.5,
    },
    {
      title: "Movie 2",
      description: "Description for Movie 2",
      posterURL: "#",
      rating: 8.8,
    },
    {
      title: "Movie 3",
      description: "Description for Movie 3",
      posterURL: "#",
      rating: 9.2,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleFilter = ({ title, rate }) => {
    const filtered = movies.filter((movie) => {
      const matchesTitle = movie.title
        .toLowerCase()
        .includes(title.toLowerCase());
      const matchesRate = rate ? movie.rating >= parseFloat(rate) : true;
      return matchesTitle && matchesRate;
    });
    setFilteredMovies(filtered);
  };

  const handleAddMovie = () => {
    if (
      newMovie.title &&
      newMovie.description &&
      newMovie.posterURL &&
      newMovie.rating
    ) {
      setMovies([...movies, newMovie]);

      setNewMovie({
        title: "",
        description: "",
        posterURL: "",
        rating: 0,
      });
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  return (
    <div className="app">
      <h1>Movie Library</h1>
      <Filter handleFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
      <h2>Add New Movie</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddMovie();
        }}
      >
        <input
          type="text"
          name="title"
          value={newMovie.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input
          type="text"
          name="description"
          value={newMovie.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="text"
          name="posterURL"
          value={newMovie.posterURL}
          onChange={handleChange}
          placeholder="Poster URL"
          required
        />
        <input
          type="number"
          name="rating"
          value={newMovie.rating}
          onChange={handleChange}
          placeholder="Rating"
          required
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default App;
