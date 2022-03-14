import React from "react";
import { Bounce } from "react-reveal";
import { Link } from "react-router-dom";
import bg from "../../assets/images/main_images/secondStatistics_images/SS_bg.png";
import { OURSERVICESPAGE } from "../../utils/consts";

import "./Serviceforbusiness.css";

function Serviceforbusiness() {
  return (
    <div className="serviceforbusiness">
      <div className="serviceforbusiness__container">
        <div className="serviceforbusiness__title">
          <Bounce right cascade>
            Do you want to get our quality service for your business?
          </Bounce>
        </div>
        <div className="serviceforbusiness__btn">
          <Bounce left>
            <Link to={OURSERVICESPAGE}>
              <button>Read more</button>
            </Link>
          </Bounce>
        </div>
      </div>
      <div className="serviceforbusiness__bg">
        <img src={bg} alt="" />
      </div>
    </div>
  );
}

export default Serviceforbusiness;
