import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {useHistory} from 'react-router-dom';


function Navbar() {
  const history=useHistory();
  const logOut = () => {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      history.push("/login");
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit" onClick={() => logOut()}>
            LOGOUT
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
