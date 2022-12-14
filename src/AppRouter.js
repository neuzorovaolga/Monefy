import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Monefy } from "./pages/Monefy";
import { Diagram } from "./pages/Diagram";
import { MenuBar } from "./components/MenuBar";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import { useDispatch } from "react-redux";
import { autoLoginThunk } from "./redux/user/thunks";
import { AccordionRibbon } from "./pages/AccordionRibbon";
import { Box, CircularProgress } from "@mui/material";

export const AppRouter = () => {
  const [isCheking, setIsChecking] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(autoLoginThunk(setIsChecking));
  }, []);

  return (
    <>
      {isCheking && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <CircularProgress size="6rem" />
        </Box>
      )}
      {!isCheking && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/monefy"
              element={
                <PrivateRoute>
                  <MenuBar content={<Monefy />} />
                </PrivateRoute>
              }
            />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/ribbon"
              element={
                <PrivateRoute>
                  <MenuBar content={<AccordionRibbon />} />
                </PrivateRoute>
              }
            />
            <Route
              path="/diagram"
              element={
                <PrivateRoute>
                  <MenuBar content={<Diagram />} />
                </PrivateRoute>
              }
            />

            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};
