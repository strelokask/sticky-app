import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

export type RoutingType = {
    path: string,
    element: React.LazyExoticComponent<React.FC<{}>>
}

interface AppRoutingProps {
    routes: RoutingType[]
}

const AppRouting: FC<AppRoutingProps> = ({ routes }) => {
    return <Routes>
        {routes.map(route => {
            const RenderComponent = route.element;
            return <Route path={route.path} element={
                <React.Suspense>
                    <RenderComponent />
                </React.Suspense>
            } />
        })}
    </Routes>
}

export default AppRouting;