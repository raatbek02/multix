import React from "react";
import bg from "../../../assets//images/main_images/secondStatistics_images/SS_bg.png";
import ss_logo1 from "../../../assets//images/main_images/secondStatistics_images/ss_logo1.svg";
import ss_logo2 from "../../../assets//images/main_images/secondStatistics_images/ss_logo2.svg";
import ss_logo3 from "../../../assets//images/main_images/secondStatistics_images/ss_logo3.svg";
import ss_logo4 from "../../../assets//images/main_images/secondStatistics_images/ss_logo4.svg";

import "./SecondStatistics.css";

function SecondStatistics() {
  return (
    <div className="secondStatistics">
      <div className="secondStatistics__container">
        <div className="secondStatistics__content">
          <div className="secondStatistics__item">
            <div className="secondStatistics__logo">
              <img src={ss_logo1} alt="" />
            </div>
            <div className="secondStatistics__number">150</div>
            <div className="secondStatistics__text">Projects</div>
          </div>
          <div className="secondStatistics__item">
            <div className="secondStatistics__logo">
              <img src={ss_logo2} alt="" />
            </div>
            <div className="secondStatistics__number">300</div>
            <div className="secondStatistics__text">Reviews</div>
          </div>{" "}
          <div className="secondStatistics__item">
            <div className="secondStatistics__logo">
              <img src={ss_logo3} alt="" />
            </div>
            <div className="secondStatistics__number">250</div>
            <div className="secondStatistics__text">CLients</div>
          </div>{" "}
          <div className="secondStatistics__item">
            <div className="secondStatistics__logo">
              <img src={ss_logo4} alt="" />
            </div>
            <div className="secondStatistics__number">120</div>
            <div className="secondStatistics__text">Awards</div>
          </div>
        </div>
      </div>
      <div className="secondStatistics__bg">
        <img src={bg} alt="" />
      </div>
    </div>
  );
}

export default SecondStatistics;
