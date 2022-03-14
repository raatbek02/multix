import React from "react";
import choose_icon1 from "../../../assets/images/main_images/choose_images/choose_icon1.svg";
import choose_icon2 from "../../../assets/images/main_images/choose_images/choose_icon2.svg";
import choose_icon3 from "../../../assets/images/main_images/choose_images/choose_icon3.svg";
import choose_bg1 from "../../../assets/images/main_images/choose_images/choose_bg1.png";
import choose_bg2 from "../../../assets/images/main_images/choose_images/choose_bg2.png";
import choose_bg3 from "../../../assets/images/main_images/choose_images/choose_bg3.png";

import "./Choose.css";
import { LightSpeed, Roll, Zoom } from "react-reveal";

function Choose() {
  return (
    <div className="choose">
      <div className="choose__container">
        <div className="title__blue">
          <LightSpeed left cascade duration={2000}>
            WHY CHOOSE US
          </LightSpeed>
        </div>
        <div className="choose__subtitle">
          <Roll right cascade duration={2000}>
            We have some special crieteria that will help you
          </Roll>
        </div>
        <div className="choose__content">
          <Zoom>
            <div className="choose__item">
              <div className="choose__item--logo">
                <img src={choose_icon1} alt="" />
              </div>
              <div className="choose__item--title">QUICK RESPONSE</div>
              <div className="choose__item--description">
                Iisque persius ne sit, simul zril vix eu. Qui ne iusto epicuri
                suscipiantur, sit ne probo adhuc. Liber verterem interpretaris
                nam et, ea pro solum expetendis.
              </div>
              <div className="choose__item--bg">
                <img src={choose_bg1} alt="" />
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="choose__item">
              <div className="choose__item--logo">
                <img src={choose_icon2} alt="" />
              </div>
              <div className="choose__item--title">QUICK RESPONSE</div>
              <div className="choose__item--description">
                Iisque persius ne sit, simul zril vix eu. Qui ne iusto epicuri
                suscipiantur, sit ne probo adhuc. Liber verterem interpretaris
                nam et, ea pro solum expetendis.
              </div>
              <div className="choose__item--bg">
                <img src={choose_bg2} alt="" />
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="choose__item">
              <div className="choose__item--logo">
                <img src={choose_icon3} alt="" />
              </div>
              <div className="choose__item--title">QUICK RESPONSE</div>
              <div className="choose__item--description">
                Iisque persius ne sit, simul zril vix eu. Qui ne iusto epicuri
                suscipiantur, sit ne probo adhuc. Liber verterem interpretaris
                nam et, ea pro solum expetendis.
              </div>
              <div className="choose__item--bg">
                <img src={choose_bg3} alt="" />
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default Choose;
