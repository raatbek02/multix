import React from "react";
import { useSelector } from "react-redux";
import os1 from "../../../assets/images/main_images/ourServices_images/os1.png";
import os2 from "../../../assets/images/main_images/ourServices_images/os2.png";
import os3 from "../../../assets/images/main_images/ourServices_images/os3.png";
import os_arrow from "../../../assets/images/main_images/ourServices_images/os_arrow.svg";

import "./OurServices.css";

function OurServices() {
  const serviceData = useSelector((s) => s.service_store.serviceData);

  let serviceMain = serviceData.slice(0, 6);
  console.log("serviceMain", serviceMain);

  return (
    <div className="ourServices">
      <div className="ourServices__container">
        <div className="title__white">OUR SERVICES</div>
        <div className="ourServices__subTitle">
          We have some special crieteria that will help you
        </div>
        <div className="flex__content">
          <div className="flex__item">
            <div className="flex__item--img">
              <img src={os1} alt="" />
            </div>
            <div className="flex__item--title">CONSULTANT COORDINATION</div>
            <div className="flex__item--description">
              Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum
              copiosae argum entum has. Latine propriae quo no unum.
            </div>
            <div className="flex__item--readMore">
              <span>Read More</span>
              <img src={os_arrow} alt="" />
            </div>
          </div>
          <div className="flex__item">
            <div className="flex__item--img">
              <img src={os2} alt="" />
            </div>
            <div className="flex__item--title">CONSULTANT COORDINATION</div>
            <div className="flex__item--description">
              Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum
              copiosae argum entum has. Latine propriae quo no unum.
            </div>
            <div className="flex__item--readMore">
              <span>Read More</span>
              <img src={os_arrow} alt="" />
            </div>
          </div>
          <div className="flex__item">
            <div className="flex__item--img">
              <img src={os3} alt="" />
            </div>
            <div className="flex__item--title">CONSULTANT COORDINATION</div>
            <div className="flex__item--description">
              Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum
              copiosae argum entum has. Latine propriae quo no unum.
            </div>
            <div className="flex__item--readMore">
              <span>Read More</span>
              <img src={os_arrow} alt="" />
            </div>
          </div>
          <div className="flex__item">
            <div className="flex__item--img">
              <img src={os3} alt="" />
            </div>
            <div className="flex__item--title">CONSULTANT COORDINATION</div>
            <div className="flex__item--description">
              Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum
              copiosae argum entum has. Latine propriae quo no unum.
            </div>
            <div className="flex__item--readMore">
              <span>Read More</span>
              <img src={os_arrow} alt="" />
            </div>
          </div>
          <div className="flex__item">
            <div className="flex__item--img">
              <img src={os2} alt="" />
            </div>
            <div className="flex__item--title">CONSULTANT COORDINATION</div>
            <div className="flex__item--description">
              Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum
              copiosae argum entum has. Latine propriae quo no unum.
            </div>
            <div className="flex__item--readMore">
              <span>Read More</span>
              <img src={os_arrow} alt="" />
            </div>
          </div>{" "}
          <div className="flex__item">
            <div className="flex__item--img">
              <img src={os1} alt="" />
            </div>
            <div className="flex__item--title">CONSULTANT COORDINATION</div>
            <div className="flex__item--description">
              Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum
              copiosae argum entum has. Latine propriae quo no unum.
            </div>
            <div className="flex__item--readMore">
              <span>Read More</span>
              <img src={os_arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
