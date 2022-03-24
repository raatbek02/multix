import React from "react";
import "./AdminHeader.css";
import dashboard_icon from "../../../assets/images/adminImages/dashboard_mainIcon.png";
import user_icon from "../../../assets/images/adminImages/admin_header/user_adminHeader.svg";

function AdminHeader() {
  return (
    <div className="adminHeader">
      <div className="adminHeader__left">
        <div className="adminHeader__title">
          <img src={dashboard_icon} alt="alt" />
          <h1>DASHBOARD</h1>
        </div>
      </div>
      <div className="adminHeader__right">
        <div className="adminHeader__right--content">
          <div className="adminHeader__right--item">
            <img src={dashboard_icon} alt="" />
          </div>
          <div className="adminHeader__right--item">
            <img src={dashboard_icon} alt="" />
          </div>{" "}
          <div className="adminHeader__right--item">
            <img src={dashboard_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
