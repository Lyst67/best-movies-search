import { getMovieReviews } from "API";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from './Reviews.module.css'

const Reviews = () => {
    const [error, setError] = useState(false)
    const [reviews, setReviews] = useState([])
    const { movieId } = useParams()

    useEffect(() => {
        if (!movieId) {
            return
        }
        async function fetchMovie() {
            setReviews([])
            setError(false)
            try {
                const review = await getMovieReviews(movieId)
                setReviews(review.results)
            } catch (error) { setError(error.response.data); } 
        }
        fetchMovie()
    }, [movieId])

    return (
        <div className={css.container}>
            {error && <h3>{error}</h3>}
            {!reviews.length ? <h3>We don't have any reviews for this movie.</h3> : <ul> 
                {reviews.map(({ author, content }, index) => (<li key={index}><h3>Autor: {author}</h3>
                    <p>{content}</p><hr /></li>))}
            </ul>}
        </div>   
    )
};
export default Reviews;