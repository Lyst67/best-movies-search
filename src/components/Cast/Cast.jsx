import { getMovieCredits, refs } from "API";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./Cast.module.css"

 const Cast = () => {
    const [error, setError] = useState(false)
    const [credits, setCredits] = useState([])
    const { movieId } = useParams()

    useEffect(() => {
        if (!movieId) {
            return
        }
        async function fetchMovie() {
            setCredits([])
            setError(false)
            try {
                const credits = await getMovieCredits(movieId)
                setCredits(credits.cast)
            } catch (error) { setError(error.response.data); } 
        }
        fetchMovie()
    }, [movieId])

    return (
        <>
            {error && <h3>{error}</h3>}
            {!credits.length ? <h3>We don't have any credits for this movie.</h3> : <ul>
                {credits.map(({ profile_path, name, character }, index) => (<li key={index}>
                    <div>
                        <img className={css.img} src={
                            profile_path ? `${refs.baseUrl}${profile_path}` : `${refs.defaultImg}`}
                            alt={name}></img>
                    </div>
                    <h3>{name}</h3>
                    <p>Character: {character}</p></li>))}
            </ul>}
        </>
          
    )
};
export default Cast;



