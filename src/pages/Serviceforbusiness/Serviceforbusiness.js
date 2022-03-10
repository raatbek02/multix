import React from "react";
import bg from "../../assets/images/main_images/secondStatistics_images/SS_bg.png";

import "./Serviceforbusiness.css";

function Serviceforbusiness() {
  return (
    <div className="serviceforbusiness">
      <div className="serviceforbusiness__container">
        <div className="serviceforbusiness__title">
          Do you want to get our quality service for your business?
        </div>
        <div className="serviceforbusiness__btn">
          <button>Read more</button>
        </div>
      </div>
      <div className="serviceforbusiness__bg">
        <img src={bg} alt="" />
      </div>
    </div>
  );
}

export default Serviceforbusiness;
