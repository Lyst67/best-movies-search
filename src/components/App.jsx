
import { Movies } from "pages/Movies";
import { NotFound } from "pages/NotFound";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "pages/Home";



export const App = () => {
  return (
    <div >
     
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/> } />
          <Route path="movies" element={<Movies />} />
        </Route>  
        <Route path="*" element={<NotFound/>} /> 
      </Routes>
     
    </div>
  );
};
