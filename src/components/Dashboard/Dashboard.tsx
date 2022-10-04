import { Box } from "@mui/system";
import { FC, useContext } from "react";
import { DashboardContext } from "./DashboardProvider";

const Dashboard: FC = () => {
  const { color } = useContext(DashboardContext);

  return (
    <Box component="main" sx={{ display: "flex", flexGrow: 1, p: 2 }}>
      {color}
    </Box>
  );
};

export default Dashboard;
