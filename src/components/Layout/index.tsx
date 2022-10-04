import { Box, CssBaseline } from "@mui/material";
import { FC, PropsWithChildren, useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";

export const headerHeight = 64;

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <>
      <CssBaseline />
      <Header onClick={toggle} />
      <Box sx={{ display: "flex" }}>
        <SideBar open={open} />
        {children}
      </Box>
    </>
  );
};

export default Layout;
