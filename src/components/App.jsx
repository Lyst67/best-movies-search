import React from "react";
import Movies from "pages/Movies/Movies";
import NotFound from "pages/NotFound";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import Home from "pages/Home/Home";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

 const App = () => {
 
  return (
    <div >
     
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home /> } />
          <Route path="movies" element={<Movies/>} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>  
        <Route path="*" element={<NotFound/>} /> 
      </Routes>
     
    </div>
  );
};
export default App;
