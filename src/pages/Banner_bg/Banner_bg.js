import React from "react";

import "./Banner_bg.css";

function Banner_bg({ title, bg }) {
  return (
    <div className="banner_bg">
      <div className="banner_bg__container">
        <div className="banner_bg__title">{title}</div>
      </div>
      <div className="banner_bg__bg">
        <img src={bg} alt="" />
      </div>
    </div>
  );
}

export default Banner_bg;
