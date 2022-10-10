import { SnackbarProvider } from "notistack";
import { lazy } from "react";
import { DashboardContextProvider } from "./components/app/Dashboard/DashboardProvider";
import Layout from "./components/app/Layout";
import AppRouting, { RoutingType } from "./components/app/Routing/AppRouting";

const routes: RoutingType[] = [
  { path: '/', element: lazy(() => import('./components/Home/Home')) },
  { path: '/archive', element: lazy(() => import('./components/Archive/Archive')) },
]

function App() {
  return (
    <SnackbarProvider maxSnack={5}>
      <Layout>
        <DashboardContextProvider>
          <AppRouting routes={routes} />
        </DashboardContextProvider>
      </Layout>
    </SnackbarProvider>
  );
}

export default App;
