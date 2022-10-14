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
      <Box sx={{ display: "flex", height: 1 }}>
        <SideBar open={open} />
        <Box display="flex" flexDirection="column" sx={{ width: 1 }}>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
