import * as React from "react";
  
// importing material UI components
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import { Button } from "@mui/material";

// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
  
export default function Header() {
  return (
      <AppBar position="static">
        <Toolbar>
          {/*Inside the IconButton, we 
           can render various icons*/}
          {/* <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
          {/* The Typography component applies 
           default font weights and sizes */}

          <button type="submit"><h3><i>&nbsp; Contribute to us &nbsp;</i></h3></button>
  
          <Typography variant="h4" 
            component="div" sx={{ flexGrow: 1 }}>
            Random Quote Generator
          </Typography>
          <nav>
          <h3><a href="#contact1">visit us</a></h3>
          
          </nav>
        </Toolbar>
      </AppBar>
  );
}


