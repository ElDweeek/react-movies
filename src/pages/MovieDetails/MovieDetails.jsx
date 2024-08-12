// MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: { api_key: '29cf44b93ca83bf48d9356395476f7ad' }
        });
        setMovie(res.data);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      {movie ? (
        <div className='container pb-5 pt-5'>
          <h1 className='text-white text-center'>{movie.title}</h1>
          <img className='d-block mx-auto' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <p className='fs-5 text-white mt-2 mb-0'>{movie.overview}</p>
          <p className='fs-5 text-white mt-2 mb-0'>Release Date: {movie.release_date}</p>
          <p className='fs-5 text-white mt-2 mb-0'>Rating: {movie.vote_average} /10</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
