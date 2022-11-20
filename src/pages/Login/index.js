import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme } from "@mui/material/styles";
import { loginConfig, passwordConfig } from "../../validation";
import { validate } from "../../validation";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUserThunk } from "../../redux/user/thunks";
import styles from "./Login.module.css";
import { getUser, getUserError } from "../../redux/user/selectors";
import { AuthError } from "../../components/AuthError";
import { userErrorAction } from "../../redux/user/actions";

const theme = createTheme();

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUser);
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userErrorAction(""));
    const data = new FormData(event.currentTarget);
    const { login, password } = {
      login: data.get("login"),
      password: data.get("password"),
    };

    // const login = data.get("login");
    // const password = data.get("password");

    const loginError = validate(login, loginConfig);
    const passwordError = validate(password, passwordConfig);

    setLoginError(loginError);
    setPasswordError(passwordError);

    if (!loginError && !passwordError) {
      dispatch(loginUserThunk(login, password));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/monefy");
    }
  }, [user]);

  return (
    <div className={styles.wrapper}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "white",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              error={Boolean(loginError)}
              helperText={loginError}
              margin="normal"
              required
              fullWidth
              id="login"
              label="Email Address"
              name="login"
              type="mail"
              autoFocus
            />
            <TextField
              error={Boolean(passwordError)}
              helperText={passwordError}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <AuthError />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
