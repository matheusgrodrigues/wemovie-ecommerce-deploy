import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./config/theme";
import CartContext from "./components/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
   <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
         <CartContext>
            <App />
         </CartContext>
      </ThemeProvider>
   </React.StrictMode>
);
