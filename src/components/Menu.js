import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EventIcon from "@material-ui/icons/Event";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="Menu"
        aria-controls="simple-menu"
        aria-haspopup="true"
        style={{ marginLeft: -10, marginRight: 10, height: 70, width: 70 }}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <HomeIcon />
          Home
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <EventIcon />Events
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FavoriteIcon />Gallery
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <PhoneIcon />Contact Us
        </MenuItem>
      </Menu>
    </div>
  );
}
