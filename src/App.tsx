import Dashboard from "./components/Dashboard/Dashboard";
import { DashboardContextProvider } from "./components/Dashboard/DashboardProvider";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <DashboardContextProvider>
        <Dashboard />
      </DashboardContextProvider>
    </Layout>
  );
}

export default App;
