// MovieDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams(); // Get the movie ID from URL params
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=1e899345`
      );
      const data = await response.json();
      setMovie(data); // Store the movie details
    };
    fetchMovieDetails();
  }, [id]); // Run the effect whenever the movie ID changes

  return (
    <div className="movie-detail">
      {movie ? (
        <div className="movie-poster">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ) : (
        <p>Loading movie...</p>
      )}
    </div>
  );
};

export default MovieDetail;
