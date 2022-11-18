import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { loginConfig, passwordConfig, validate } from "../../validation";
import { registerUserThunk } from "../../redux/user/thunks";
import { getUser } from "../../redux/user/selectors";
import styles from "./Register.module.css";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUser);
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { login, password, passwordConfirm } = {
      login: data.get("login"),
      password: data.get("password"),
      passwordConfirm: data.get("passwordConfirm"),
    };

    const loginError = validate(login, loginConfig);
    const passwordError = validate(password, passwordConfig);
    const passwordConfirmError =
      password !== passwordConfirm
        ? "Please enter equal passwords"
        : validate(passwordConfirm, passwordConfig);

    setLoginError(loginError);
    setPasswordError(passwordError);
    setPasswordConfirmError(passwordConfirmError);

    if (!loginError && !passwordError && !passwordConfirmError) {
      dispatch(registerUserThunk(login, password));
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
            Register page
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
              fullWidth
              id="login"
              label="Email Address"
              type="mail"
              name="login"
              autoFocus
            />
            <TextField
              error={Boolean(passwordError)}
              helperText={passwordError}
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <TextField
              error={Boolean(passwordConfirmError)}
              helperText={passwordConfirmError}
              margin="normal"
              fullWidth
              name="passwordConfirm"
              label="Confirm password"
              type="password"
              id="passwordConfirm"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
