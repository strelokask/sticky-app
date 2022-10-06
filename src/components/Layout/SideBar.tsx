import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FC } from "react";

import ArchiveIcon from "@mui/icons-material/Archive";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
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
    { title: "Notes", icon: <EmojiObjectsIcon /> },
    { title: "Archive", icon: <ArchiveIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
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
        {items.map(({ title, icon }) => (
          <ListItem key={title}>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
