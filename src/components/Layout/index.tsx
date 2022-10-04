import { Box, CssBaseline } from "@mui/material";
import { FC, useState } from "react";
import Header from "./Header";
import "./index.css";
import SideBar from "./SideBar";

export const headerHeight = 64;

const Layout: FC = () => {
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header onClick={toggle} />
      <SideBar open={open} />
    </Box>
  );
};

export default Layout;
