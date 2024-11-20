import { createRoutesFromElements, createBrowserRouter, Route, defer } from "react-router-dom";
import BaseLayout from "./components/base/BaseLayout";
import MovieService from "./services/MovieService";
import { MovieResponse } from "./schemas/MovieSchema";
import PurchaseCompleted from "./pages/purchase-completed/Purchase-completed";
import App from "./pages/home/App";
import Cart from "./pages/cart/Cart";

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
         <Route element={<PurchaseCompleted />} path="cart/purchase-completed" />
      </Route>
   )
);

export default router;
