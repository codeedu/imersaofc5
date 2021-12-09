import { AppBar, Toolbar, Typography } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <StoreIcon />
        <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
          Fincycle
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
