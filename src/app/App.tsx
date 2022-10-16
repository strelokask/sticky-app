import { SnackbarProvider } from "notistack";
import { lazy } from "react";
import Layout from "./components/Layout";
import AppRouting, { RoutingType } from "./components/Routing/AppRouting";
import { ColorModeContextProvider } from "./contexts/ColorModeProvider";
import { DashboardContextProvider } from "./contexts/DashboardProvider";

const routes: RoutingType[] = [
  { path: '/', element: lazy(() => import('../components/Home/Home')) },
  { path: '/archive', element: lazy(() => import('../components/Archive/Archive')) },
]

function App() {
  return (
    <ColorModeContextProvider>
      <SnackbarProvider maxSnack={5}>
        <Layout>
          <DashboardContextProvider>
            <AppRouting routes={routes} />
          </DashboardContextProvider>
        </Layout>
      </SnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default App;
