import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Monefy } from "./pages/Monefy";
import { Diagram } from "./pages/Diagram";
import { MenuBar } from "./components/MenuBar";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import { checkLoginUser } from "./firebase/auth";
import { useDispatch } from "react-redux";
import { autoLoginThunk } from "./redux/user/thunks";

export const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(autoLoginThunk());
  }, []);

  return (
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

        {/* <Route path="/ribbon" element={< />} / > */}
        <Route
          path="/diagram"
          element={<MenuBar content={<Diagram costs={[]} />} />}
        />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
