import { Link, useLocation } from "react-router-dom"
import css from './Movielist.module.css'

const MoviesList = ({ movies }) => {
    const location = useLocation()
    return (
        <ul>
            {movies.map(({ id, title }) => {
                return <li className={css.list_item} key={id}><Link className={css.list_link} to={`/movies/${id}`} state={{ from: location }}>{title}</Link></li>
            })}
                    
        </ul>
    )
};
export default MoviesList;