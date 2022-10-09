import { SnackbarProvider } from "notistack";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import { DashboardContextProvider } from "./components/Dashboard/DashboardProvider";
import Layout from "./components/Layout";

function App() {
  return (
    <SnackbarProvider maxSnack={5}>
      <Layout>
        <DashboardContextProvider>
          <Routes>
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </DashboardContextProvider>
      </Layout>
    </SnackbarProvider>
  );
}

export default App;
