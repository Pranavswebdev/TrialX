import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Badge,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <AppBar sx={{ backgroundColor: "#E1EDF7" }} position="static" elevation={1}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={onMenuClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Button variant="contained" color="primary">
          Filters
        </Button>
        <Button variant="text" color="primary" sx={{ ml: 2 }}>
          Reset to Default
        </Button>
        <Typography variant="body1" sx={{ ml: "auto", mr: 2 }}>
          John Doe
        </Typography>
        <IconButton color="inherit">
          <SettingsIcon />
        </IconButton>
        <Badge badgeContent={1} color="error">
          <NotificationsIcon />
        </Badge>
        <Button
          variant="outlined"
          sx={{
            ml: 2,
            borderRadius: "50%",
            minWidth: 40,
            width: 40,
            height: 40,
          }}
        >
          S
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
