import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../routes";

function AppRouter() {
  return (
    <div style={{ marginTop: "80px" }}>
      <Routes>
        {publicRoutes.map(({ path, Component }) => (
          <Route primary={false} key={path} path={path} element={Component} />
        ))}
      </Routes>
    </div>
  );
}

export default AppRouter;
