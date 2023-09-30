import { getTodaysTrending } from "API"
import MoviesList from "components/MoviesList/MoviesList"
import React, { useEffect, useState } from "react"
import css from './Home.module.css'


const Home = () => {
        const [todayMovies, setTodayMovies] = useState([])
        const [error, setError] = useState(false)
        
        useEffect(() => {
                async function fetchMovies() {
                        try {
                                const data = await getTodaysTrending()
                                if (!data.results.length) {
                                        alert('Opps! There are no movies for your request! Please try again!');
                                        return;
                                }
                                setTodayMovies(data.results)
                        } catch (error) { setError(error.response.data); } 
                }
                fetchMovies()
        }, [])
  
        return (
                <div className={css.container}>
                        <h1 className={css.title}>Trending today</h1>
                        {error && <h1>{error}</h1>}
                        <MoviesList movies={todayMovies} />
                </div>
        )
};

export default Home;