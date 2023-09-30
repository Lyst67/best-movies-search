import { getMovieDetails } from "API";
import css from "./MovieDetails.module.css"
import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { refs } from "API";

 const MovieDetails = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [movie, setMovie] = useState("")
    const { movieId } = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const goBackLocationRef = useRef(location.state?.from ?? '/movies')
    
    useEffect(() => {
        if (!movieId) {
            return
        }
        async function fetchMovie() {
            setIsLoading(true)
            setMovie("")
            setError(false)
            try {
                const movie = await getMovieDetails(movieId)
                if (!movie) {
                    alert('Opps! There are no movie for your request! Please try again!');
                    return;
                }
                setMovie(movie)
            } catch (error) { setError(error.response.data); } finally {
                setIsLoading(false)
            }
        }
        fetchMovie()
    }, [movieId])

    const handleBack = () => { navigate(goBackLocationRef.current) }

    const { poster_path, title, overview, genres, release_date, vote_average } = movie
    const year = new Date(release_date).getFullYear();

    return (
        <>
            <button type="button" onClick={handleBack} ><span>&#8592;</span> Go back</button>
            {error && <h1>{error}</h1>}
            {isLoading && <h1>Loaging...</h1>}
            <div className={css.movie_card}>
                <div className={css.imgbox}>
                    <img className={css.img} src={
                        poster_path ? `${refs.baseUrl}${poster_path}` : `${refs.defaultImg}`}
                        alt={title}></img>
                </div>
                <div>
                    <h1>{title} ({year})</h1>
                    <p>User Score: {Math.round(vote_average * 10)}%</p>
                    <h2>Overview</h2>
                    <p>{overview}</p>
                    <h3 >Genres</h3>
                    <div className={css.genres}>
                        {genres?.map((ganer, index) => (<p key={index}>{ganer.name}</p>))}
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <h3>Additional information</h3>
                <ul>
                    <li><Link to="cast">Cast</Link></li>
                    <li><Link to="reviews">Reviews</Link></li>
                </ul>
            </div>
            <hr />
            <Outlet />
        </>
    )
};
export default MovieDetails;