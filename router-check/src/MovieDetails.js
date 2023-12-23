import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetails = () => {
  useParams();

  // You can fetch the movie details based on the movieId using Axios or from your state

  return (
    <div>
      <h2>Movie Details</h2>
      <p>Description: Add your movie description here</p>
      <iframe
        title="Movie Trailer"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YOUR_EMBED_VIDEO_LINK"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetails;
