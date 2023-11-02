import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { RouteConfig } from "./routerConfig";

export const AppRouter = () => {
  return (
    <Suspense fallback="">
        <Routes>
          {RouteConfig.map(({ path, element }) => (
            <Route
              key={path}
              element={element}
              path={path}
            />
          ))}
        </Routes>
      </Suspense>
  )
}
