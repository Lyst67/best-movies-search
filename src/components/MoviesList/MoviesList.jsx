import { Link, useLocation } from "react-router-dom"
import css from '../../pages/Home/Home.module.css'

const MoviesList = ({ movies }) => {
    const location = useLocation()
    return (
        <ul>
            {movies.map(({ id, title }) => {
                return <li className={css.list_item} key={id}><Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link></li>
            })}
                    
        </ul>
    )
};
export default MoviesList;