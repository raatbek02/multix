import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../pages/Admin/Admin";
import { adminRoutes, publicRoutes } from "../routes";
import isAdmin from "../store/isAdmin";
import { ADMIN } from "../utils/consts";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function AppRouter() {
  return (
    <div>
      <Routes>
        {publicRoutes.map(({ path, Component }) => (
          <Route
            primary={false}
            key={path}
            path={path}
            element={
              <>
                <Header />
                <div style={{ marginTop: "80px" }}>{Component}</div>
                <Footer />
              </>
            }
          />
        ))}

        {isAdmin && (
          <Route path={ADMIN} element={<Admin />}>
            {adminRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={Component} />
            ))}
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default AppRouter;
