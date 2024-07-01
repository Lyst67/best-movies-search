import { getMovieDetails } from 'API';
import css from './MovieDetails.module.css';
import React, { useEffect, useRef, useState, Suspense } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { refs } from 'API';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const goBackLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function fetchMovie() {
      setMovie('');
      setError(false);
      try {
        const movie = await getMovieDetails(movieId);
        if (!movie) {
          alert('Opps! There are no movie for your request! Please try again!');
          return;
        }
        setMovie(movie);
      } catch (error) {
        setError(error.response.data);
      }
    }
    fetchMovie();
  }, [movieId]);

  const handleBack = () => {
    navigate(goBackLocationRef.current);
  };

  const { poster_path, title, overview, genres, release_date, vote_average } =
    movie;
  const year = new Date(release_date).getFullYear();

  return (
    <div className={css.container}>
      <button className={css.back_btn} type="button" onClick={handleBack}>
        <span>&#8678;</span>
        <span className={css.back_text}> Back</span>
      </button>
      {error && <h1>{error}</h1>}
      <div className={css.movie_card}>
        <div className={css.imgbox}>
          <img
            className={css.img}
            src={
              poster_path
                ? `${refs.baseUrl}${poster_path}`
                : `${refs.defaultImg}`
            }
            alt={title}
          ></img>
        </div>
        <div className={css.movie_info}>
          <h1 className={css.title}>
            {title} ({year})
          </h1>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h2 className={css.overviev_title}>Overview:</h2>
          <p className={css.overviev_text}>{overview}</p>
          <div className={css.gener_row}>
            <h3>Genres:</h3>
            <div className={css.genres}>
              {genres?.map((ganer, index) => (
                <p key={index}>{ganer.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={css.add_info}>
        <h3 className={css.add_title}>Additional information:</h3>
        <ul className={css.add_info_links}>
          <li>
            <Link className={css.add_link} to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link className={css.add_link} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <hr />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
