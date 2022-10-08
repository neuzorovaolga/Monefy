import React from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "./AppRouter";
import { Provider } from "react-redux";
import { store } from "./redux";
import "./index.css";
import { pink, teal } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: pink,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </Provider>
);
