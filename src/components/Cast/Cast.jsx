import { getMovieCredits, refs } from 'API';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const [error, setError] = useState(false);
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function fetchMovie() {
      setCredits([]);
      setError(false);
      try {
        const credits = await getMovieCredits(movieId);
        setCredits(credits.cast);
      } catch (error) {
        setError(error.response.data);
      }
    }
    fetchMovie();
  }, [movieId]);

  return (
    <div className={css.container}>
      {error && <h3>{error}</h3>}
      {!credits.length ? (
        <h3>We don't have any credits for this movie.</h3>
      ) : (
        <ul className={css.cast_list}>
          {credits.map(({ profile_path, name, character }, index) => (
            <li className={css.cast_card} key={index}>
              <div className={css.img_box}>
                <img
                  className={css.img}
                  src={
                    profile_path
                      ? `${refs.baseUrl}${profile_path}`
                      : `${refs.defaultImg}`
                  }
                  alt={name}
                ></img>
              </div>
              <h4 className={css.actor_name}>{name}</h4>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Cast;
