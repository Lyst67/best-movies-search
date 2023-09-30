import { getTodaysTrending } from "API"
import MoviesList from "components/MoviesList/MoviesList"
import React, { useEffect, useState } from "react"

const Home = () => {
        const [todayMovies, setTodayMovies] = useState([])
        const [isLoading, setIsLoading] = useState(false)
        const [error, setError] = useState(false)
        
        useEffect(() => {
                async function fetchMovies() {
                        setIsLoading(true);
                        try {
                                const data = await getTodaysTrending()
                                if (!data.results.length) {
                                        alert('Opps! There are no movies for your request! Please try again!');
                                        return;
                                }
                                setTodayMovies(data.results)
                        } catch (error) { setError(error.response.data); } finally {
                setIsLoading(false)
            }
                }
                fetchMovies()
        }, [])
  
        return (
                <div>
                        <h1>Trending today</h1>
                        {error && <h1>{error}</h1>}
                        {isLoading && <h1>Loaging...</h1>}
                        <MoviesList movies={todayMovies} />
                </div>
        )
};

export default Home;