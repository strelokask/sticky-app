import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import { DashboardContextProvider } from "./components/Dashboard/DashboardProvider";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <DashboardContextProvider>
        <Routes>
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </DashboardContextProvider>
    </Layout>
  );
}

export default App;
