import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./config/theme";
import CartContext from "./components/CartContext";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
   <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
         <CartContext>
            <RouterProvider router={router} />
         </CartContext>
      </ThemeProvider>
   </React.StrictMode>
);
