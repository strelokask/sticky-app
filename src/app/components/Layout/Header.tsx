import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Divider, IconButton, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { headerHeight } from ".";
import DarkModeSwitch from '../DarkModeSwitch/DarkModeSwitch';

interface HeaderProps {
  onClick: () => void;
}
const Header: FC<HeaderProps> = ({ onClick }) => {
  return (<>
    <AppBar position="static" sx={{ height: headerHeight }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={onClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Sticky
          </Link>
        </Typography>
        <DarkModeSwitch />
      </Toolbar>
    </AppBar>
    <Divider />
  </>
  );
};

export default Header;
