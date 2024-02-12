import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" p={2} flexGrow={1}>
            Food stall
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<LoginIcon />}
            style={{ marginRight: "8px" }}
          >
            Login
          </Button>
          <Button variant="outlined" color="inherit" endIcon={<LogoutIcon />}>
            Log out
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
