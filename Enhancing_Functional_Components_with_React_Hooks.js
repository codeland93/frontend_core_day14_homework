import React, { useState } from 'react';

const MoviesList = () => {
  const [movies, setMovies] = useState([
    { title: 'Inception', genre: 'Action', details: 'A mind-bending thriller about dreams.', showDetails: false },
    { title: 'The Godfather', genre: 'Crime', details: 'A mafia family epic.', showDetails: false },
    { title: 'Interstellar', genre: 'Sci-Fi', details: 'A space exploration story.', showDetails: false }
  ]);

  const [showActionOnly, setShowActionOnly] = useState(false);

  // Toggles details visibility
  const toggleDetails = (index) => {
    setMovies(movies.map((movie, i) => 
      i === index ? { ...movie, showDetails: !movie.showDetails } : movie
    ));
  };

  // Removes a movie from the list
  const removeMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  // Toggles between showing all movies and showing only Action genre movies
  const toggleView = () => {
    setShowActionOnly(!showActionOnly);
  };

  // Filters movies if the Action-only view is toggled on
  const filteredMovies = showActionOnly ? movies.filter(movie => movie.genre === 'Action') : movies;

  return (
    <div>
      <h1>Favorite Movies</h1>
      <button onClick={toggleView}>
        {showActionOnly ? 'Show All Movies' : 'Show Action Movies Only'}
      </button>
      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index}>
            <span onClick={() => toggleDetails(index)}>{movie.title}</span>
            {movie.showDetails && <p>{movie.details}</p>}
            <button onClick={() => removeMovie(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
