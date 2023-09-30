import SearchForm from "components/SearchForm/SearchForm"
import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { getMoviesBySearch } from "API"
import MoviesList from "components/MoviesList/MoviesList"

const Movies = () => {
    const [searcedMovies, setSearcedMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get("query") ?? ""

    const hahdlesetSearchMovies = (value) => {
        setSearchParams({ query: value })
    }

    useEffect(() => {
        if (query === "") {
            return
        }
        async function fetchMoviesBySearch() {
            setIsLoading(true)
            setSearcedMovies([])
            setError(false)
            try {
                const movies = await getMoviesBySearch(query)
                if (!movies.results.length) {
                    alert('Opps! There are no movies for your request! Please try again!');
                    return;
                }
                setSearcedMovies(movies.results)
            } catch (error) { setError(error.response.data); } finally {
                setIsLoading(false)
            }
        }
        fetchMoviesBySearch()
    }, [query])

    return (
        <div>
            <div>
                <SearchForm onSubmit={hahdlesetSearchMovies} />
            </div>
            
            <div>
                {error && <h1>{error}</h1>}
                {isLoading && <h1>Loaging...</h1>}
                <MoviesList movies={searcedMovies} />
            </div>
        </div>
    )
};
export default Movies;