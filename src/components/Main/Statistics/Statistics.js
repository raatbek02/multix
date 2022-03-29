import React from "react";
import ProgressBar from "react-animated-progress-bar";

import { Bounce, Slide } from "react-reveal";
import Spin from "react-reveal/Spin";
import statistics_dots from "../../../assets/images/main_images/statistics_images/statistics_dots.png";

import "./Statistics.css";

function Statistics() {
  return (
    <div className="statistics">
      <div className="statistics__container">
        <div className="statistics__content">
          <div className="statistics__left">
            <Bounce left cascade>
              <div className="statistics__item">
                <div className="statistics__item--top">
                  <div className="statistics__name">Business Management</div>
                  {/* <div className="statistics__name">95%</div> */}
                </div>

                <ProgressBar
                  width="100%"
                  height="10px"
                  rect
                  fontColor="#fff"
                  percentage="90"
                  rectPadding="1px"
                  rectBorderRadius="20px"
                  trackPathColor="transparent"
                  bgColor="#da4500"
                  trackBorderColor="grey"
                />
                {/* <div className="statistics__item--bottom"></div> */}
              </div>
              <div className="statistics__item">
                <div className="statistics__item--top">
                  <div className="statistics__name">Financial Management</div>
                  {/* <div className="statistics__name">95%</div> */}
                </div>
                <ProgressBar
                  width="100%"
                  height="10px"
                  rect
                  fontColor="#fff"
                  percentage="40"
                  rectPadding="1px"
                  rectBorderRadius="20px"
                  trackPathColor="transparent"
                  bgColor="#da4500"
                  trackBorderColor="grey"
                />
                {/* <div className="statistics__item--bottom"></div> */}
              </div>{" "}
              <div className="statistics__item">
                <div className="statistics__item--top">
                  <div className="statistics__name">Project Management</div>
                  {/* <div className="statistics__name">95%</div> */}
                </div>

                <ProgressBar
                  width="100%"
                  height="10px"
                  rect
                  fontColor="#fff"
                  percentage="70"
                  rectPadding="1px"
                  rectBorderRadius="20px"
                  trackPathColor="transparent"
                  bgColor="#da4500"
                  trackBorderColor="grey"
                />
                {/* <div className="statistics__item--bottom"></div> */}
              </div>
            </Bounce>
          </div>
          <div className="statistics__right">
            <div className="statistics__right--dots">
              <img src={statistics_dots} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
