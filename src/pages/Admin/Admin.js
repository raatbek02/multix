import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader/AdminHeader";
import AdminPathName from "./AdminPathName/AdminPathName";
import AdminSidebar from "./AdminSidebar/AdminSidebar";
import AdminStatistic from "./AdminStatistic/AdminStatistic";

import "./Admin.css";

function Admin() {
  return (
    <div className="admin">
      <div className="admin__left">
        <AdminSidebar />
      </div>
      <div className="admin__right">
        <AdminHeader />
        <AdminPathName />
        <AdminStatistic />

        <div className="admin__content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Admin;
