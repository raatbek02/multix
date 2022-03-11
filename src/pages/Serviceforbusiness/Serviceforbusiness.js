import React from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/images/main_images/secondStatistics_images/SS_bg.png";
import { OURSERVICESPAGE } from "../../utils/consts";

import "./Serviceforbusiness.css";

function Serviceforbusiness() {
  return (
    <div className="serviceforbusiness">
      <div className="serviceforbusiness__container">
        <div className="serviceforbusiness__title">
          Do you want to get our quality service for your business?
        </div>
        <div className="serviceforbusiness__btn">
          <Link to={OURSERVICESPAGE}>
            <button>Read more</button>
          </Link>
        </div>
      </div>
      <div className="serviceforbusiness__bg">
        <img src={bg} alt="" />
      </div>
    </div>
  );
}

export default Serviceforbusiness;
