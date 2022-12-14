import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { FC } from "react";

import ArchiveIcon from "@mui/icons-material/Archive";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import { Link } from "react-router-dom";
import { headerHeight } from ".";

const drawerWidth = {
  open: 180,
  close: 80,
};

interface SideBarProps {
  open: boolean;
}
const SideBar: FC<SideBarProps> = ({ open }) => {
  const items = [
    { title: "Notes", icon: <EmojiObjectsIcon />, to: "/" },
    { title: "Archive", icon: <ArchiveIcon />, to: "/archive" },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      color="primary"
      sx={{
        width: open ? drawerWidth.open : drawerWidth.close,
        flexShrink: 0,
        height: `calc(100% - ${headerHeight}px)`,
        "& .MuiDrawer-paper": {
          marginTop: `${headerHeight}px`,
          width: open ? drawerWidth.open : drawerWidth.close,
          maxHeight: `calc(100vh - ${headerHeight}px)`,
        },
      }}
    >
      <List>
        {items.map(({ title, icon, to }) => (
          <ListItem key={title}>
            <Link style={{ textDecoration: "none" }} to={to}>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText
                  primary={
                    title
                  }
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
