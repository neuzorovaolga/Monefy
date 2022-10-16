import React from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogoutAction } from "../../../redux/user/actions";
import { auth } from "../../../firebase/auth";

export const Navbar = ({ menuClick }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(userLogoutAction());
    auth.signOut();
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={menuClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Monefy
        </Typography>
        <Button color="inherit" onClick={logOut}>
          Log Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};
