import React from "react";
import { useSelector } from "react-redux";
import "./AdminPathName.css";

function AdminPathName() {
  const pathName = useSelector((s) => s.adminPathName.adminPathName);
  return (
    <div className="adminPath">
      <div className="adminPath__content">
        <div className="adminPage__item">
          <span>Dashboard / {pathName}</span>
        </div>
      </div>
    </div>
  );
}

export default AdminPathName;
