import { createRoutesFromElements, createBrowserRouter, Route, defer } from "react-router-dom";
import BaseLayout from "./components/base/BaseLayout";
import App from "./App";
import MovieService from "./services/MovieService";
import { MovieResponse } from "./schemas/MovieSchema";
import Cart from "./Cart";

export interface LoaderHomeData {
   movies: MovieResponse;
}

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route errorElement={<>GlobalError.tsx</>} element={<BaseLayout />} path="/">
         <Route
            element={<App />}
            index
            loader={() =>
               defer({
                  movies: MovieService.getMovies(),
               })
            }
         />

         <Route element={<Cart />} path="cart" />
         <Route element={<>Cart</>} path="cart/purchase-completed" />
      </Route>
   )
);

export default router;
