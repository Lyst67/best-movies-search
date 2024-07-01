import { Link, useLocation } from 'react-router-dom';
import css from './Movielist.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(({ id, title, release_date }) => {
        const year = new Date(release_date).getFullYear();
        return (
          <li className={css.list_item} key={id}>
            <Link
              className={css.list_link}
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              {title} ({year})
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default MoviesList;
