import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#1E1E30" }}>
      <Toolbar>
        <Typography variant="h5">Covid</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
